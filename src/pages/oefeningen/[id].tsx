import { Navigation } from "@/components/Navigation";
import { exercises } from "@/config/exercises";
import { exerciseExists } from "@/utils/checker";
import { Heading } from "@newcodedevelopment/ui";
import { existsSync, readFileSync } from "fs";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Script from "next/script";
import path from "path";

type ExerciseProps = {
  id: number;
  file: string;
};

export default function Exercise({ id, file }: ExerciseProps) {
  const index = id - 1;

  return (
    <>
      <Navigation
        currentIndex={index}
        paths={[
          {
            name: "Vorige",
            path: `/oefeningen/${id - 1}`,
            disabled: !exerciseExists(id - 1),
          },
          {
            name: "Volgende",
            path: `/oefeningen/${id + 1}`,
            disabled: !exerciseExists(id + 1),
          },
        ]}
      >
        <Heading color="dark" type="h3">
          Oefening {id}: {exercises[index].name}
        </Heading>
      </Navigation>

      <div id="app"></div>

      <Script id={`exercise-${id}`} type="module" dangerouslySetInnerHTML={{ __html: file }} />
    </>
  );
}

export async function getServerSideProps({ params }: Params) {
  const { id } = params;
  const index = parseInt(id as string) - 1;

  if (!exerciseExists(id)) return { notFound: true };

  const contextPath = path.resolve(process.cwd(), "src/lib/context.js");
  const context = exercises[index].canvas ? readFileSync(contextPath, "utf-8") : "";

  const utilsPath = path.resolve(process.cwd(), "src/lib/utils.js");
  const utils = readFileSync(utilsPath, "utf-8");

  const beforePath = path.resolve(process.cwd(), `src/lib/before/before-${id}.js`);
  const beforeExists = existsSync(beforePath);
  const before = beforeExists ? readFileSync(beforePath, "utf-8") : "";

  const afterPath = path.resolve(process.cwd(), `src/lib/after/after-${id}.js`);
  const afterExists = existsSync(afterPath);
  const after = afterExists ? readFileSync(afterPath, "utf-8") : "";

  const exercisePath = path.resolve(process.cwd(), `oefeningen/oefening-${id}.js`);
  const exercise = readFileSync(exercisePath, "utf-8");

  const file = context + utils + before + exercise + after;

  return {
    props: {
      id: parseInt(id),
      file,
    },
  };
}
