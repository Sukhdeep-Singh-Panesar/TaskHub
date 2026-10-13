import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
function Footer() {
    return (
        <>
            <div className="flex w-full flex-wrap items-center justify-between gap-4 border-t border-slate-200 bg-white px-6 py-5 text-sm text-slate-500">
                <div className="bottomleft border-2 rounded-full p-2 border-black"><FcTodoList /></div>
                <div className="centerContainer p-2">&copy; 2026 Sukhdeep Singh. All Rights Reserved. </div>
                <div className="right flex gap-2">
                <div className="bottomright border-2 rounded-full p-2 border-black cursor-pointer"><FaFacebookF /></div>
                <div className="bottomright border-2 rounded-full p-2 border-black cursor-pointer"><FaLinkedinIn /></div>
                <div className="bottomright border-2 rounded-full p-2 border-black cursor-pointer"><FaXTwitter /></div>
                <div className="bottomright border-2 rounded-full p-2 border-black cursor-pointer"><FaGithub /></div>
                </div>
            </div>
        </>
    )

}

export default Footer
