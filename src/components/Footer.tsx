import { FaGithub } from "react-icons/fa";
function Footer() {
    return (
        <>
            <div className="w-full border-t border-slate-200 bg-white px-6 py-6">
                <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
                            TH
                        </div>

                        <div>
                            <p className="text-sm font-bold text-slate-900">TaskHub</p>
                            <p className="text-xs text-slate-500">
                                Stay organized, one task at a time.
                            </p>
                        </div>
                    </div>
                <div className="centerContainer p-2">
                    <p className="text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} TaskHub · Built by Sukhdeep Singh
                    </p>
                </div>
                    <div className="flex items-center gap-5">

                        <a
                            href="#tasks"
                            className="text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
                        >
                            Tasks
                        </a>

                        <a
                            href="https://github.com/Sukhdeep-Singh-Panesar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
                        >
                            <FaGithub className="h-5 w-5" />
                            GitHub
                        </a>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer
