import React, { useState, useEffect } from "react";
import "./header.css";

import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "../../assets/header_image1.png";
import image2 from "../../assets/header_image2.png";

import blob from "../../assets/blob.svg";

import star from "../../assets/star.svg";

const h1Variant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 0.3, duration: 1.5 },
	},
};

const imageVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 1, duration: 1.5 },
	},
};

const texts = [
	"Hey 👋 , start tracking you income and expenses with budgetMe 🇳🇬",
	"Salut 👋 , commencez à suivre vos revenus et dépenses avec budgetMe 🇫🇷",
	"Hēi 👋, kāishǐ gēnzōng nín de shōurù hé zhīchū shǐyòng budgetMe 🇨🇳",
	"mrhban 👋 , abda fi tatabue dakhlak wanafaqatik biastikhdam budgetMe 🇦🇪 ",
];

const FadingText = ({ text, key }) => {
	return (
		<motion.div
			key={key}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			{text}
		</motion.div>
	);
};

const Header = () => {
	const [textIndex, setTextIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTextIndex((index) => (index + 1) % texts.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);
	return (
		<section
			// data-scroll-section
			className="budgetMe__header section__padding"
			id="home"
		>
			<motion.div className="budgetMe__header-content">
				<p>
					<AnimatePresence mode="wait">
						<FadingText text={texts[textIndex]} />
					</AnimatePresence>
				</p>

				<motion.h1
					variants={h1Variant}
					initial="hidden"
					animate="visible"
					className="gradient__text"
				>
					Gain Financial Freedom, with BudgetMe.
				</motion.h1>
				<h3>
					<Typewriter
						options={{
							autostart: true,
							loop: true,
						}}
						onInit={(typewriter) => {
							typewriter

								.typeString("BudgetMe allows you to track your goals!")
								.pauseFor(2000)
								.deleteChars(6)
								.typeString("expenses!")
								.pauseFor(2000)
								.deleteChars(9)
								.typeString("income!")
								.pauseFor(50000)
								.deleteChars(7)
								.start();
						}}
					/>
				</h3>

				<button type="button">
					<span>Get Started</span>
				</button>
			</motion.div>
			<motion.div
				variants={imageVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				className="budgetMe__header-img1"
			>
				<img animate={{}} src={image1} alt="image1" />
			</motion.div>

			<motion.div
				variants={imageVariants}
				initial="hidden"
				animate="visible"
				className="budgetMe__header-img2"
			>
				<img src={image2} alt="image2" />
			</motion.div>

			<motion.div
				variants={imageVariants}
				initial="hidden"
				animate="visible"
				className="budgetMe__header-blob float"
			>
				<img src={blob} alt="blob" />
			</motion.div>

			<motion.div
				variants={imageVariants}
				initial="hidden"
				animate="visible"
				className="budgetMe__header-star"
			>
				<img className="float" src={star} alt="star" />
			</motion.div>
		</section>
	);
};

export default Header;
