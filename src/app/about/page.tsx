import Image from "next/image";
import mission from "@/img/mission.jpg";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
const page = () => {
  return (
    <div className="mt-28">
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-indigo-500 font-bold mb-2">
          About Us
        </h1>
        <p className="text-slate-500 text-lg">
          Recipes Hub is a platform for foodies to share and discover recipes.
        </p>
      </div>
      <div className="px-6 sm:px-20 pt-10 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/85 font-bold mb-2 mt-10">
                Our Mission
              </h2>
              <p className="text-slate-500 text-lg">
                Our mission is to make it easy for foodies to share and discover
                recipes. We want to help foodies to find the perfect recipe for
                any occasion.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/85 font-bold mb-2 mt-10">
                Who We Are
              </h2>
              <p className="text-slate-500 text-lg">
                We are a passionate team of food enthusiasts, chefs, and
                culinary experts dedicated to sharing our love for cooking with
                the world. With a diverse background in various cuisines and
                cooking techniques, we bring a wealth of knowledge and
                experience to help you elevate your culinary skills.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/85 font-bold mb-2 mt-10">
                What We Offer
              </h2>
              <ul className="text-slate-500 text-lg">
                <li className="mb-2">
                  <strong className="text-white mr-2">Curated Recipes:</strong>A
                  diverse collection of recipes from around the world, carefully
                  selected and tested by our team to ensure authenticity and
                  deliciousness.
                </li>
                <li className="mb-2">
                  <strong className="text-white mr-2">
                    Step-by-Step Instructions:
                  </strong>
                  Easy-to-follow guides and video tutorials that make cooking
                  approachable for everyone, from beginners to seasoned chefs.
                </li>
                <li className="mb-2">
                  <strong className="text-white mr-2">
                    Personalized Meal Plans:
                  </strong>
                  Customizable meal planning tools to fit your dietary
                  preferences and nutritional needs, helping you enjoy a
                  balanced and varied diet.
                </li>
                <li>
                  <strong className="text-white mr-2">
                    Community Support:
                  </strong>
                  A vibrant community of food lovers where you can share your
                  experiences, ask questions, and get feedback on your culinary
                  creations.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/85 font-bold mb-2 mt-10">
                Our Values
              </h2>
              <ul className="text-slate-500 text-lg">
                <li className="mb-2">
                  <strong className="text-white mr-2">Quality:</strong>We are
                  committed to providing high-quality content and resources that
                  you can trust.
                </li>
                <li className="mb-2">
                  <strong className="text-white mr-2">Inspiration:</strong>
                  We aim to inspire you to try new recipes, explore different
                  cuisines, and discover the joy of cooking.
                </li>
                <li className="mb-2">
                  <strong className="text-white mr-2">Support:</strong>
                  We believe in supporting our community with helpful advice,
                  tips, and encouragement every step of the way.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <CardContainer className="inter-var sm:p-10">
              <CardBody className="relative group/card  hover:shadow-2xl shadow-xl shadow-white/[0.3] hover:shadow-white/[0.8] border-white/[0.2] w-auto h-auto rounded-2xl p-6 border-2 bg-zinc-950">
                <CardItem translateZ="100" className="w-full">
                  <Image
                    src={mission}
                    height={"400"}
                    width={"400"}
                    className="rounded-2xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-bold mt-4">
          Join us on this culinary adventure and let&apos;s make cooking a
          delightful and fulfilling part of your life!
        </h1>
      </div>
    </div>
  );
};

export default page;
