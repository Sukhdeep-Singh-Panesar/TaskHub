import logo from '../assets/Ellipse.svg'
function Navbar() {

    return (
        <>
            <nav className="w-full relative bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white text-lg font-bold shadow-sm">TH</div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                   Task Hub
                </h1>
                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">

                    <a href="#overview"
                       className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">
                        Overview
                    </a>

                    <a href="#progress"
                       className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">
                        Progress
                    </a>

                    <a href="#tasks"
                       className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">
                        Tasks
                    </a>

                </div>
                <div className="image ml-auto">
                <img src={logo} alt="logo" className="w-12 h-12 m-2"/>
                </div>
            </nav>
        </>
    )
}

export default Navbar
