import MassageCards from "./MassageCards";
import MassageCardData from "./massageCardData.json";

export default function MassageCardContainer() {
    return (
		<section id="massages" className="w-full  bg-[#709b6c] custom-3d-effect z-10 relative ">
			<div className="bg-grey-800 text-white p-4 ">
				<div className="container max-w-[1000px] mx-auto px-4 my-12">
                <div className="flex flex-wrap -mx-4">
					{MassageCardData.map((card) => (
              <MassageCards key={card.id} {...card} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}


