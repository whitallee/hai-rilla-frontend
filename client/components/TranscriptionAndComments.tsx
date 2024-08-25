'use client'

import { MessageSquarePlus, Send } from "lucide-react"
import { Button } from "./ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { FormEvent, useState, useEffect } from "react"
import { Input } from "./ui/input"

export default function TranscriptionAndComments() {


    const transcript1 = "[Phone rings]\nHomeowner: Hello?\nHVAC Technician: Yooo, this is Dave from Cool Comfort HVAC. Am I speaking with Mr. Johnson?\nHomeowner: Yes, that’s me.\nHVAC Technician: Great! I’m following up on the service request you submitted online. You mentioned you were interested in upgrading your current HVAC system. Is that right?\nHomeowner: Yes, our AC has been struggling to keep up, and it’s really old. We’re thinking it might be time for a new system.\nHVAC Technician: That’s understandable. Older units often lose efficiency over time. How long have you had your current system?\nHomeowner: It’s been about 15 years now.\nHVAC Technician: Wow, that’s a good run for an HVAC system! But after 10-15 years, it’s common to see a drop in efficiency, which means higher energy bills and less effective cooling. You might also be dealing with refrigerant issues since older units often use R-22, which is being phased out.\nHomeowner: Yeah, our bills have definitely gone up. We’ve had a few repairs done too, but it just doesn’t cool like it used to.\nHVAC Technician: I hear you. At this point, investing in a new system could save you more in the long run. The latest models are up to 30% more efficient, and they use environmentally friendly refrigerants. Plus, many come with smart thermostats that help manage energy usage even better.\nHomeowner: That sounds good, but I’m worried about the upfront cost. How much are we talking about for a new system?\nHVAC Technician: It depends on the size of your home and the features you’re looking for, but most of our customers see prices in the $5,000 to $8,000 range for a complete system. That includes installation, a new thermostat, and a warranty. We also offer financing options to help spread out the cost, and there are some rebates available for energy-efficient models that can bring that price down.\nHomeowner: I’m definitely interested, but I need to discuss it with my spouse first.\nHVAC Technician: Of course, I totally understand. I’d be happy to come out and do a free in-home assessment. I can check your current setup, take measurements, and provide a detailed quote. That way, you’ll have all the information you need to make a decision.\nHomeowner: That sounds like a good idea. Can we schedule that for this weekend?\nHVAC Technician: Absolutely, I have some availability on Saturday morning. Does 10 AM work for you?\nHomeowner: That’s perfect.\nHVAC Technician: Great! I’ll put you down for 10 AM on Saturday. I’ll bring some information on the different systems we recommend for homes like yours, and we can go over everything in detail. Sound good?\nHomeowner: Yep, that works for me.\nHVAC Technician: Fantastic. I’ll send you a confirmation email with all the details. If you have any questions before then, feel free to give me a call. Otherwise, I’ll see you on Saturday!\nHomeowner: Thanks, Dave. Looking forward to it.\nHVAC Technician: My pleasure, Mr. Johnson. Have a great day!\nHomeowner: You too. Bye.\nHVAC Technician: Goodbye.\n"
    const comments1 = [{ lineId: 2, text: "Refrain from using informal greetings in the future. It seems unprofessional.", files: [] }]

    const transcript2 = "Salesperson: Good afternoon, this is Sarah from Climate Control HVAC. How can I help you today?\nCustomer: Hi, Sarah. I’m calling because my AC unit has been acting up lately, and I’m considering replacing it. I wanted to get some information on the options available.\nSalesperson: I’m sorry to hear about your AC issues, but I’m glad you called us. We offer a range of energy-efficient systems that can meet your needs. Could you tell me a little more about your current unit and what issues you’ve been experiencing?\nCustomer: Sure. It’s an older model, probably about 15 years old. It’s not cooling as well as it used to, and my energy bills have been going up. I’ve had it repaired a few times, but it seems like it’s time for a replacement.\nSalesperson: It sounds like your unit has reached the end of its lifespan. The good news is that newer models are much more efficient and can save you money on your energy bills. We offer both central air systems and ductless mini-splits. Do you have a preference?\nCustomer: I’ve heard good things about ductless systems, but I’m not sure if it’s the right fit for my home.\nSalesperson: Ductless systems are great, especially if you have certain rooms that are harder to cool or heat. They’re also very efficient because they don’t lose energy through ductwork. However, if your home already has ducts, a central air system might be more cost-effective. We can send a technician to assess your home and provide a recommendation based on your specific needs.\nCustomer: That sounds helpful. What does the assessment involve, and is there a cost?\nSalesperson: The assessment is a free service we offer. A technician will come to your home, evaluate your current system, and discuss your cooling and heating needs. They’ll then recommend the best system for your home and provide you with a detailed estimate.\nCustomer: Great, I’d like to schedule that. When would be the soonest available appointment?\nSalesperson: Let me check our schedule. We have an opening tomorrow afternoon at 3 PM, or Thursday morning at 10 AM. Would either of those times work for you?\nCustomer: Tomorrow at 3 PM works for me.\nSalesperson: Perfect. I’ve got you scheduled for tomorrow at 3 PM. Our technician will give you a call about 30 minutes before they arrive. Is there anything else I can assist you with today?\nCustomer: No, that’s all for now. Thanks, Sarah.\nSalesperson: You’re welcome! We look forward to helping you get your home comfortable again. Have a great day!\nCustomer: You too, bye.\nSalesperson: Goodbye."
    const comments2 = []

    const textArray = transcript1.split("\n")

    const [comments, setComments] = useState(comments1)
    const [input, setInput] = useState("")

    const handleOpen = (lineId: number) => {
        // setCommentModalOpen(true)
    }
    const handleClose = (lineId: number) => {
        // setCommentModalOpen(false)

    }

    const handleEdit = (e: FormEvent) => {
        e.preventDefault();

        const form = e.target
        const formData = new FormData(form);
        const commentSent = formData.get("commentInput");
        const lineId = parseInt(formData.get("lineId"));
        const prevCommentIndex = comments.findIndex((item) => { item.lineId == lineId })
        const newComment = {
            lineId: lineId,
            text: commentSent
        }
        const commentsList = [...comments]
        commentsList.splice(prevCommentIndex, 1)
        commentsList.splice(prevCommentIndex, 0, newComment)
        commentsList.sort(function (a, b) {
            return (b.lineId > a.lineId) ? -1 : 1
        })
        console.log(commentsList)
        setComments(commentsList)
    }

    const handleDelete = (index: number) => {

        const commentsList = [...comments]
        const commentIndex = comments.findIndex((item) => { item.lineId == index })
        commentsList.splice(commentIndex, 1)

        commentsList.sort(function (a, b) {
            return (b.lineId > a.lineId) ? -1 : 1
        })
        console.log(commentsList)
        setComments(commentsList)
    }
    const handleSend = (e: FormEvent) => {
        e.preventDefault();

        const form = e.target
        const formData = new FormData(form);
        const commentSent = formData.get("commentInput");
        const lineId = parseInt(formData.get("lineId"))
        const commentsList = [...comments, { lineId: lineId, text: commentSent }]
        commentsList.sort(function (a, b) {
            return (b.lineId > a.lineId) ? -1 : 1
        })
        console.log(commentsList)
        setComments(commentsList)
    }

    useEffect(() => {

    }, [comments])

    function TranscriptLine({ line, index }: { line: string, index: number }) {
        const comment = comments.find(item => item.lineId === index);
        return (

            <div id="transcript-line" key={index} className="w-full flex justify-between items-center relative hover:bg-gray-200 p-2 rounded pr-4">
                <span>{line}</span>
                {/* <Button onClick={() => { handleOpen(index) }} id="add-comment-button" className="aspect-square p-0 rounded-full absolute right-0 translate-x-12 hover:scale-110"><MessageSquarePlus /></Button> */}
                {!comment ? <Dialog>
                    <DialogTrigger id="add-comment-button" className="bg-black text-white aspect-square w-10 flex justify-center items-center p-0 rounded-full absolute right-0 translate-x-[50%] hover:scale-110"><MessageSquarePlus /></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-black">Leave a Comment</DialogTitle>
                            <DialogDescription>
                                Commenting on &apos;{line}&apos;
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSend}>
                            <input type="hidden" name="lineId" value={index}></input>
                            <Input defaultValue="" name="commentInput" type="text" placeholder="Type your response here" className="text-black" />
                            <DialogClose><Button type="submit" ><Send /></Button></DialogClose>
                        </form>
                    </DialogContent>
                </Dialog> : <></>
                }
                {
                    comment ?
                        <div style={{ position: 'absolute', marginLeft: '40rem', overflowWrap: 'break-word' }} className="bg-white rounded min-w-[200px] max-w-[500px] p-2">
                            <span>Line {index}: {comment.text}</span>
                            <Dialog>
                                <DialogTrigger id="edit-comment-button" className="bg-black text-white aspect-square w-10 flex justify-center items-center p-0 rounded-full hover:scale-110"><MessageSquarePlus /></DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className="text-black">Edit this Comment</DialogTitle>
                                        <DialogDescription>
                                            Editing on &apos;{line}&apos;
                                        </DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleEdit}>
                                        <input type="hidden" name="lineId" value={index}></input>
                                        <Input defaultValue="" name="commentInput" type="text" placeholder="Type your response here" className="text-black" />
                                        <DialogClose><Button type="submit" ><Send /></Button></DialogClose>
                                    </form>
                                </DialogContent>
                            </Dialog>
                            <Dialog>
                                <DialogTrigger id="delete-comment-button" className="bg-black text-white aspect-square w-10 flex justify-center items-center p-0 rounded-full hover:scale-110"><MessageSquarePlus /></DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className="text-black">Delete this Comment</DialogTitle>
                                        <DialogDescription>
                                            Are you sure you would like to delete this comment?
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogClose>
                                        <Button type="submit" onClick={() => handleDelete(index)}><Send /></Button>
                                        <Button>Cancel</Button>
                                    </DialogClose>
                                </DialogContent>
                            </Dialog>

                        </div>
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
                    {/* {comments.map((comment,  index) => {
                        const foundComment = comments.find(item => item.lineId === index);
                        return comment == foundComment ? <div className="bg-white rounded max-w-[50rem] translate-x-[120%] p-2">{comment.text}</div>
                        : <></>
                    })} */}
                </div>
            </div>
        </>
    )
}