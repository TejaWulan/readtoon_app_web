import logo from "../assets/macatoon.png"

const Banner = () => {
    return (
        <header>
            <div>
                <img 
                	className="z-[1] h-[300px] md:h-[400px] lg:[600px] xl:h-full md:mr-24"
                    src={logo} 
                    alt="logo" 
                />
            </div>

            <div
                className="f-1 text-stone-50 text-[30px] md:text-[45px] font-extrabold md:leading-[65px]"
            >
                Indonesian read cartoon/manhwa/manga website
            </div>
        </header>
    )
}

export default Banner
