// app/test-loader/page.tsx
import Spinner from "@/components/Spinner/Spinner";

export default function TestLoaderPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 40, padding: 40 }}
    >
      <Spinner size={80} ariaLabel="with-text" showText={true} />
    </div>
  );
}
