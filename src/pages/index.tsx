import { HyperLink, Text } from "@newcodedevelopment/ui";

export default function Home() {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="inset-0 absolute -z-20 background-animate from-blue-500 via-amber-500 to-red-500 bg-gradient-to-r" />
      <div className="inset-0 absolute -z-10 opacity-70 bg-light-500" />

      <span className="flex flex-col justify-center items-center gap-10">
        <Text type="h1" color="light" className="text-5xl font-medium">
          Welkom, op dit workshop van NewCode
        </Text>

        <HyperLink href="/oefeningen/1">Start</HyperLink>
      </span>
    </div>
  );
}
