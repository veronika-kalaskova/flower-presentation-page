import Image from "next/image"
import CardImage from '@/assets/card-image.svg'

export const Recommendations = () => {
    return (
        <section className="px-10 mt-10">
            <div className="tag">Our recommendation</div>
            <div className="flex flex-col gap-3 items-center justify-center bg-white py-5 px-4 mt-5 rounded-lg shadow-md max-w-[350px]">
                <Image src={CardImage} alt="Card image" />
                <h2>Celestial Blossom</h2>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam at arcu a est sollicitudin euismod.</p>
                <button>Learn more</button>
            </div>
        </section>
    )
}