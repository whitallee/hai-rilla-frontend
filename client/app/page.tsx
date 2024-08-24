import SideBar from "@/components/SideBar";
import TranscriptionAndComments from "@/components/TranscriptionAndComments";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={20} minSize={10}>
          <SideBar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={80} minSize={10}>
          <TranscriptionAndComments />
        </ResizablePanel>
      </ResizablePanelGroup>

    </main>
  );
}
