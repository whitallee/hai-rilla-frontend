import SideBar from "@/components/SideBar";
import TranscriptionAndComments from "@/components/TranscriptionAndComments";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-between">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={15} minSize={10}>
                    <SideBar />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={85} minSize={10}>
                    <TranscriptionAndComments />
                </ResizablePanel>
            </ResizablePanelGroup>

        </main>
    );
}
