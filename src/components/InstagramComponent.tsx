import React, { useState, useEffect } from "react";
import InstagramGrid from "./InstagramGrid";
import InstagramCarousel from "./InstagramCarousel";

interface InstagramPost {
	id: string;
	title: string;
	image: string;
	url: string;
	description?: string | string[];
}

const InstagramFeed: React.FC<{ posts: InstagramPost[] }> = ({ posts }) => {
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 1200,
	);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="">
			<div className="lg:container mx-auto px-4">
				<h1 className="text-h3 sm:text-h2 w-full text-center mb-[20px]">
					Instagram Feed
				</h1>

				{windowWidth > 650 ? (
					<InstagramGrid posts={posts} />
				) : (
					<InstagramCarousel posts={posts} />
				)}
			</div>
		</div>
	);
};

const InstagramComponent = () => {

	const Posts: InstagramPost[] = [
		{
			id: "1",
			title: "grill_shack",
			image: "/Images/insta/1.jpg",
			url: "https://www.instagram.com/p/DRcbg9rCF0E/",
			description: "West London’s NEW Peri Peri Smash Burger 🌶🔥Crispy edges. Juicy center. Full peri punch.You chill, we grill 😎🔥If you’re in West Drayton, swing by 😎Pull up to Grill Shack — you won’t regret it 🚀📍 119 Falling Lane, Yiewsley UB7 8AG📞 01895 913672#GrillShack #PeriPeriSmash #WestLondonEats #SmashMyPatty #HalalFoodUK #UKFoodies#fyp.",
		},
		{
			id: "2",
			title: "grill_shack",
			image: "/Images/insta/2.jpg",
			url: "https://www.instagram.com/p/DGqZ9bKopZC/",
			description: "‼️The HYPE Is REAL‼️ALLAHUMABARIK! Last Few Weeks Have Been Very Eventful. Want To Say A MASSIVE Thank-you To Each & Every Person Who Has Supported Us On This Journey💯",
		},
		{
			id: "3",
			title: "grill_shack",
			image: "/Images/insta/3.jpg",
			url: "https://www.instagram.com/p/DBoMyx4shDl/",
			description: "‼️LOYALTY LOYALTY LOYALTY‼️ONLY 2 WEEKS AGO AT GRILL SHACK WE INTRODUCED OUR LOYATY CARD TO EVERY CUSTOMER WHO COMES THROUGH THE DOORS.",
		},
		{
			id: "4",
			title: "grill_shack",
			image: "/Images/insta/4.jpg",
			url: "https://www.instagram.com/p/DBypDaesJWh/",
			description: "‼️SHACK BURGER‼️HAVE YOU TRIED OUR SHACK CHICKEN GRILLED BURGER?🍔JUICY FLAVOURS OF YOUR CHOICE!TOPPED WITH HASH BROWN AND CHEESE 🧀",
		},
		{
			id: "5",
			title: "grill_shack",
			image: "/Images/insta/5.jpg",
			url: "https://www.instagram.com/p/DBOvE6MsPrU/",
			description: "‼️NOW AVAILABLE ‼️CHEESY NACHOS NOW IN STORE OR ORDER ONLINE VIA UBEREATS/JUSTEAT/ DELIVEROO….-ORIGINAL NACHO CHEESE SAUCE TOPPED WITH JALAPENOS AND SALSA SAUCE 😋",
		},
		{
			id: "6",
			title: "grill_shack",
			image: "/Images/insta/6.jpg",
			url: "https://www.instagram.com/p/DBLrep8sRvy/",
			description: "‼️DONNER BURGER‼️HAVE YOU TRIED OUR SHACK STYLE DONNER BURGER…SERVED IN A SEEDED BUN WITH OUR IN HOUSE CHILLI & GARLIC SAUCE🤭",
		},
	];

	return <InstagramFeed posts={Posts} />;
};

export default InstagramComponent;
