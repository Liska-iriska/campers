import Sidebar from "@/components/Sidebar/Sidebar";

interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function SidebarNotes({ searchParams }: Props) {
  const params = await searchParams;

  return <Sidebar key={JSON.stringify(params)} />;
}
