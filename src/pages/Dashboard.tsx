import Topbar from "@/components/topbar";
import Footer from "@/components/Footer";
import AboutUs from "@/features/about-us";
import Hero from "@/features/hero";
import OurProducts from "@/features/our-products";
import Service from "@/features/service";
import Story from "@/features/story";
import Contact from "@/features/contact";
import Testimonials from "@/features/testimonials";

const Dashboard = () => {
	return (
		<div className="min-h-dvh max-h-dvh overflow-hidden flex flex-col">
			<Topbar />
			<main className="grow max-h-full overflow-y-auto">
				<Hero />
				<OurProducts />
				<AboutUs />
				<Story />
				<Service />
				<Testimonials />
				<Contact />
				<Footer />
			</main>
		</div>
	);
};

export default Dashboard;
