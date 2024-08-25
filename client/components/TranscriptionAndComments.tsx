'use client'

import { MessageSquarePlus } from "lucide-react"
import { Button } from "./ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import { useState } from "react"
import { Input } from "./ui/input"

export default function TranscriptionAndComments() {
    const transcript = "[Phone rings]\nHomeowner: Hello?\nHVAC Technician: Yooo, this is Dave from Cool Comfort HVAC. Am I speaking with Mr. Johnson?\nHomeowner: Yes, that’s me.\nHVAC Technician: Great! I’m following up on the service request you submitted online. You mentioned you were interested in upgrading your current HVAC system. Is that right?\nHomeowner: Yes, our AC has been struggling to keep up, and it’s really old. We’re thinking it might be time for a new system.\nHVAC Technician: That’s understandable. Older units often lose efficiency over time. How long have you had your current system?\nHomeowner: It’s been about 15 years now.\nHVAC Technician: Wow, that’s a good run for an HVAC system! But after 10-15 years, it’s common to see a drop in efficiency, which means higher energy bills and less effective cooling. You might also be dealing with refrigerant issues since older units often use R-22, which is being phased out.\nHomeowner: Yeah, our bills have definitely gone up. We’ve had a few repairs done too, but it just doesn’t cool like it used to.\nHVAC Technician: I hear you. At this point, investing in a new system could save you more in the long run. The latest models are up to 30% more efficient, and they use environmentally friendly refrigerants. Plus, many come with smart thermostats that help manage energy usage even better.\nHomeowner: That sounds good, but I’m worried about the upfront cost. How much are we talking about for a new system?\nHVAC Technician: It depends on the size of your home and the features you’re looking for, but most of our customers see prices in the $5,000 to $8,000 range for a complete system. That includes installation, a new thermostat, and a warranty. We also offer financing options to help spread out the cost, and there are some rebates available for energy-efficient models that can bring that price down.\nHomeowner: I’m definitely interested, but I need to discuss it with my spouse first.\nHVAC Technician: Of course, I totally understand. I’d be happy to come out and do a free in-home assessment. I can check your current setup, take measurements, and provide a detailed quote. That way, you’ll have all the information you need to make a decision.\nHomeowner: That sounds like a good idea. Can we schedule that for this weekend?\nHVAC Technician: Absolutely, I have some availability on Saturday morning. Does 10 AM work for you?\nHomeowner: That’s perfect.\nHVAC Technician: Great! I’ll put you down for 10 AM on Saturday. I’ll bring some information on the different systems we recommend for homes like yours, and we can go over everything in detail. Sound good?\nHomeowner: Yep, that works for me.\nHVAC Technician: Fantastic. I’ll send you a confirmation email with all the details. If you have any questions before then, feel free to give me a call. Otherwise, I’ll see you on Saturday!\nHomeowner: Thanks, Dave. Looking forward to it.\nHVAC Technician: My pleasure, Mr. Johnson. Have a great day!\nHomeowner: You too. Bye.\nHVAC Technician: Goodbye.\n"
    const textArray = transcript.split("\n")

    const [comments, setComments] = useState([{ lineId: 2, text: "Refrain from using informal greetings in the future. It seems unprofessional.", files: [] }])
    const [input, setInput] = useState("")

    const handleOpen = (lineId: number) => {
        // setCommentModalOpen(true)
    }
    const handleClose = (lineId: number) => {
        // setCommentModalOpen(false)
    }

    function TranscriptLine({ line, index }: { line: string, index: number }) {
        const comment = comments.find(item => item.lineId === index);
        return (

            <div id="transcript-line" key={index} className="w-full flex justify-between items-center relative hover:bg-gray-200 p-2 rounded pr-4">
                <span>{line}</span>
                {/* <Button onClick={() => { handleOpen(index) }} id="add-comment-button" className="aspect-square p-0 rounded-full absolute right-0 translate-x-12 hover:scale-110"><MessageSquarePlus /></Button> */}
                <Dialog>
                    <DialogTrigger id="add-comment-button" className="bg-black text-white aspect-square w-10 flex justify-center items-center p-0 rounded-full absolute right-0 translate-x-[50%] hover:scale-110"><MessageSquarePlus /></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-black">Leave a Comment</DialogTitle>
                            <DialogDescription>
                                Commenting on &apos;{line}&apos;
                            </DialogDescription>
                        </DialogHeader>
                        <Input onChange={(e) => { setInput(e.target.value) }} defaultValue={input} type="text" placeholder="Type your response here" className="text-black" />
                    </DialogContent>
                </Dialog>

                {
                    comment ?
                        <div className="absolute right-0 bg-white rounded max-w-[20rem] translate-x-[120%] p-2">{comment.text}</div>
                        : <></>
                }
            </div>

        )
    }

    return (
        <>
            {/* <Modal open={commentModalOpen} onClose={handleClose}>
                <Box>
                    <Input type="text" />
                </Box>
            </Modal> */}

            <div className="bg-gray-800 h-screen overflow-y-scroll flex justify-start pl-16">
                <div className="bg-white w-[40rem] h-fit my-8 text-black flex flex-col gap-8 p-8">
                    {textArray.map((line, index) => {
                        return (
                            <TranscriptLine line={line} index={index} key={index} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}