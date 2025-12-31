import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { FadeIn } from "@/components/animations/FadeIn";

const Success = () => {
	const { t, getLocalizedPath } = useLanguage();

	return (
		<div className="min-h-dvh flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6 py-16">
			<FadeIn direction="up">
				<div className="text-center max-w-lg mx-auto">
					{/* Success Icon */}
					<div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
						<CheckCircle size={40} strokeWidth={1.5} />
					</div>

					{/* Title */}
					<h1
						className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-6"
						style={{
							fontFamily: "GeneralSans, sans-serif",
							fontWeight: "300",
						}}
					>
						{t.success.title}
					</h1>

					{/* Message */}
					<p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-10">
						{t.success.message}
					</p>

					{/* CTA */}
					<Button
						asChild
						size="lg"
						className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-6 px-8 text-sm tracking-wide uppercase transition-all duration-300"
					>
						<Link to={getLocalizedPath("/")}>
							<ArrowLeft className="mr-2 h-4 w-4" />
							{t.success.backHome}
						</Link>
					</Button>
				</div>
			</FadeIn>
		</div>
	);
};

export default Success;
