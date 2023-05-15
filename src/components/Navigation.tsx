import { exercises } from "@/config/exercises";
import { Steps, Symbol } from "@newcodedevelopment/ui";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type NavigationProps = HTMLAttributes<HTMLElement> & {
  paths: { name: string; path: string; disabled?: boolean }[];
  currentIndex: number;
  children?: React.ReactNode;
};

export function Navigation({
  paths,
  children,
  currentIndex,
  className,
  ...props
}: NavigationProps) {
  return (
    <header
      {...props}
      className={twMerge(
        "fixed left-0 top-0 z-[200] w-full transform transition-all duration-200 ease-in-out",
        className
      )}
    >
      <div className="px-page bg-dark-700 flex flex-row items-center justify-between bg-opacity-20 py-4 backdrop-blur-xl backdrop-filter lg:bg-transparent lg:backdrop-blur-0 xl:py-12">
        <Link href="/" className="z-10 flex flex-row items-center gap-3">
          <Symbol className={twMerge("text-light-500 w-6  xl:w-12")} />
          <span className="text-lg font-extrabold xl:text-3xl">NewCode</span>
        </Link>

        <Steps currentIndex={currentIndex} length={exercises.length} bgColor="light" />

        <div className="hidden xl:flex xl:flex-row xl:gap-16">
          {paths.map(({ name, path, disabled }, index) =>
            disabled ? (
              <span
                key={index}
                className="font-bold opacity-30 transition-all duration-1000 ease-in-out xl:text-xl"
              >
                {name}_
              </span>
            ) : (
              <a
                key={index}
                href={path}
                className="font-bold transition-all duration-1000 ease-in-out xl:text-xl"
              >
                {name}_
              </a>
            )
          )}
        </div>
      </div>

      <div className="px-page">{children}</div>
    </header>
  );
}
