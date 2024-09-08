import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-40 h-36 overflow-hidden">
                <Image
                  src="/image.png"
                  alt="Profile"
                  layout="fill"
                  // objectFit="cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Our Vision
              </h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                fugit vel architecto dolor id aspernatur fugiat, adipisci
                doloremque rem velit officiis alias neque illo illum natus
                voluptate, voluptates eos. Reprehenderit iusto eius eligendi,
                tempora commodi consectetur incidunt doloremque dolores possimus
                delectus id illo ducimus labore ipsa quibusdam officia explicabo
                excepturi consequatur ea, libero corporis nobis sint! Nisi sunt
                vel iste ex odio, perspiciatis adipisci itaque distinctio
                eligendi. Dolor ipsa, repudiandae omnis tempora, sint reiciendis
                odio voluptatibus voluptates architecto excepturi ad aperiam?
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Here's the Demo Data!
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              voluptates et fugit, nemo itaque, aliquid quaerat aliquam repellat
              quisquam corrupti vel illo magni aut. Esse velit id distinctio
              molestiae ullam optio illum ut, delectus sunt est dolorum tempore
              accusamus animi doloremque eaque voluptatum maiores sit itaque
              mollitia aliquam quam. Voluptatem accusantium dolor reprehenderit,
              quod adipisci veniam, debitis quibusdam ex molestiae ducimus neque
              iste, tempore ut nulla voluptatum sapiente laborum aliquam
              delectus quaerat eius? Ea itaque quod recusandae quo nisi mollitia
              distinctio ratione neque ipsam, aliquam laboriosam blanditiis
              ducimus in. Voluptates, fugiat doloremque. Similique quibusdam
              aspernatur, officiis laborum eos in.lorem99
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img
                  src="/3.jpg"
                  alt="Harry as a beginner"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white dark:text-white">
                  The Spark of Curiosity
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  suscipit ipsam dolorem, officia maiores ad repellendus aliquid
                  voluptates architecto quidem inventore rerum iusto laborum
                  doloribus dignissimos velit fuga aut magni nihil perferendis
                  quisquam accusantium natus eaque! Omnis, placeat corporis,
                  unde enim commodi sit, vitae officia dolore tenetur error
                  rerum dolorem impedit minus voluptatem nisi tempore sapiente
                  accusantium? Modi sint ea accusamus. Aliquid animi, sunt
                  officia excepturi, magni, doloribus architecto accusamus
                  dolorem quibusdam repellat tempore iste! Quo iure placeat
                  quasi maiores temporibus in obcaecati quod consectetur dolorum
                  at, hic, consequatur explicabo nisi recusandae aspernatur.
                  Dicta hic reprehenderit nam cumque? Saepe.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img
                  src="/2.jpg"
                  alt="Harry learning new skills"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Diving Deeper
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  After mastering the basics, Harry’s thirst for knowledge grew.
                  He began exploring more complex topics such as data
                  structures, algorithms, and web development. Enrolling in
                  online courses and attending coding bootcamps, Harry quickly
                  expanded his skill set, taking on freelance projects to apply
                  his knowledge in real-world scenarios.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img
                  src="/1.jpg"
                  alt="Harry working on a big project"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Taking on Challenges
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  With several years of experience under his belt, Harry began
                  tackling more significant challenges. From contributing to
                  open-source projects to developing his own applications, Harry
                  continued to push his limits, always looking for opportunities
                  to learn and grow. His journey wasn’t without its setbacks,
                  but each obstacle was a stepping stone to becoming the skilled
                  developer he is today.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img
                  src="/4.jpg"
                  alt="Harry mentoring others"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Giving Back
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Today, Harry is not only a proficient coder but also a mentor
                  to others. He regularly contributes to the programming
                  community by writing tutorials, giving talks, and helping new
                  coders find their footing in the world of software
                  development. For Harry, coding is more than just a
                  profession—it’s a lifelong journey of learning and sharing
                  knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
