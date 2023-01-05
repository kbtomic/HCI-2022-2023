import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import Image from 'next/image';

const blogsConstArray = [
    {
        id: 1,
        title: 'FABULOUS MINT CANDIES',
        author: 'Jack Smith',
        picture: "/blogpics/marshmallow.svg",
        date: '01/12/2022',
        cta_text: "Read a review about mint candies like you've never tried before. Mint candies are the perfect combination of sweet and tangy, with a cool and refreshing flavor.",
        full_text: `When it comes to classic flavors, few can compete with the refreshing taste of mint candies. Whether it's a wintergreen candy, a peppermint patty, or a chocolate-covered mint, these treats are sure to bring back fond memories of childhood. 
                    But mint candies are more than just a nostalgic treat; they offer a number of health benefits and can even help boost your mood. Mint candies come in a variety of shapes and sizes, from small, round discs to larger, more elaborate shapes. 
                    They can also come in a variety of flavors, such as spearmint, peppermint, and even chocolate-covered mints. Mint candies are often enjoyed around the holiday season, as well as for special occasions like weddings or showers. 
                    Mint candies taste great and have a number of health benefits as well. Mint has long been known for its ability to help with digestion. Eating mint candies can help stimulate your appetite, reduce feelings of bloating, and aid in digestion. Mint also has antibacterial and antifungal properties, making it a great choice to help with colds and other ailments.
                    Mint candies are also a great way to sweeten up your day. The sugar in mint candies can help boost your mood, which can be beneficial for those who suffer from depression or anxiety. Eating mint candies can also help increase focus and concentration, as the refreshing flavor can help wake up the mind.       Mint candies make a great snack or dessert option. Pair them with a cup of tea for a comforting and soothing beverage. Or, add them to your favorite ice cream for a delicious twist. Additionally, you can use mint candies to make festive treats like mint-chocolate chip cookies or brownies.
                    So if you’re looking for a sweet treat that’s good for you and tastes great, reach for a mint candy! The classic flavor is sure to bring a smile to your face.`
    },
    {
        id: 2,
        title: 'THE BEST OF MILKA',
        author: 'Ann Thorne',
        picture: '/blogpics/milka.svg',
        date: '20/11/2022',
        cta_text: `We visited Germany and tried 10 different Milka chocolates. Which do you think impressed us the most?`,
        full_text: `If you’re a chocolate lover, then you’ve probably heard of the delicious Milka chocolate brand. From creamy milk chocolate bars to chocolate truffles, Milka has something for everyone. But have you ever tried all 10 of the different Milka chocolate products? If not, then it’s time to give it a try!

        To start, you’ll need to get your hands on all 10 types of Milka chocolate. This can be done by purchasing individual bars or by buying a variety pack. Once you’ve got your chocolate, it’s time to begin the tasting.
        
        First up is the original Milka milk chocolate bar. This classic bar is made with Alpine milk and cocoa butter and comes in a variety of flavors, such as White Chocolate and Hazelnut. Enjoy the smooth, creamy texture and the sweetness of the milk chocolate.
        
        Next, try the Milka Oreo Chocolate. An Oreo cookie covered in delicious milk chocolate makes for a great combination. The crunchy cookie and the creamy milk chocolate melt together in your mouth.
        
        The Milka Caramel Chocolate is a must-try. The combination of creamy milk chocolate and sweet caramel makes it a decadent treat. The smooth texture and rich flavor make this one a winner.
        
        The Milka Nuss-Schokolade is a treat for all nut lovers. The combination of milk chocolate and crunchy hazelnuts makes for a delicious combination.
        
        For a crunchy treat, try the Milka Knusper Chocolate. The milk chocolate bar is filled with crispy clusters of cornflakes and is a great snack.
        
        The Milka Yogurt Chocolate is a sweet and creamy bar that combines real yogurt powder with milk chocolate. The yogurt adds a unique flavor and creaminess that is sure to please.
        
        The Milka White Chocolate is a creamy and sweet treat. The smooth white chocolate melts in your mouth and is perfect for those who prefer a milder flavor.
        
        For a more intense flavor, try the Milka Dark Chocolate. This bar is made with high-quality cocoa and has a distinct, intense flavor.
        
        The Milka Alpenmelk Chocolate is a classic. The combination of creamy milk chocolate and crunchy hazelnuts makes for a delicious treat.
        
        Finally, try the Milka Chocolate Truffles. These bite-sized chocolate treats are made with rich, creamy chocolate and come in a variety of flavors.
        
        With all of these amazing flavors to choose from, it’s easy to see why Milka is one of the most popular chocolate brands. So go ahead and give all 10 of the Milka chocolates a try. You won’t be disappointed!`
    },
    {
        id: 3,
        title: 'LOW-CALORIE SNACKS',
        author: 'Mary Jackson',
        picture: '/blogpics/cookies.svg',
        date: '29/12/2022',
        cta_text: `Enjoy wide selection of low-calorie sweets for guilt-free indulgence. 
                    Read this blog and find out which of them are in the top 5!`,
        full_text:`Snacking can be a great way to satisfy hunger between meals, boost your energy levels, and even help you reach your health goals. However, snacking on high-calorie, unhealthy snacks can easily derail your healthy eating habits. To make sure you're snacking smart, it's important to choose snacks that are low in calories but still provide a satisfying crunch or flavor. Here are some low-calorie snack ideas to help you stay on track with your nutrition goals.

        1. Fresh Fruit: Fruits are a great source of vitamins and minerals, and they are naturally low in calories. Apples, oranges, grapes, and bananas are all great options for a low-calorie snack. If you're looking for something a little more interesting, try adding a few slices of fresh mango, watermelon, or pineapple to your snack.
        
        2. Popcorn: Popcorn is a great snack that's low in calories but still provides a satisfying crunch. To keep the calorie count down, skip the butter and choose a light, low-calorie flavor like salt and pepper or white cheddar.
        
        3. Greek Yogurt: Greek yogurt is a great source of protein, and it also contains live and active cultures that can help support gut health. Look for plain Greek yogurt and add your own fresh or frozen fruit for additional flavor.
        
        4. Trail Mix: Trail mix is a great snack for when you're on the go, and it can also be a great option for a low-calorie snack. Look for a mix with a variety of nuts, seeds, and dried fruit. Just be sure to watch your portion size, as the calorie count can add up quickly.
        
        5. Hummus and Veggies: Hummus is a great source of plant-based protein, and it goes great with crunchy veggies like carrots and celery. If you're looking for something a little more filling, try adding some whole grain crackers or pita chips.
        
        Snacking can be a great way to help you reach your health goals, but it's important to choose snacks that are low in calories but still provide a satisfying crunch or flavor. Try these low-calorie snack ideas to help you stay on track with your nutrition goals.`
    },
    {
        id: 4,
        title: 'SUGAR-FREE DARK CHOCOLATE',
        author: 'Mike Jackson',
        picture: '/blogpics/darkchoco.svg',
        date: '10/12/2022',
        cta_text: `You won’t get diabetes from this! Try this sugar-free dark chocolate which is a delicious treat that is packed with antioxidants and has numerous health benefits.`,
        full_text: `If you’re looking for a healthier alternative to traditional dark chocolate, look no further than sugar-free dark chocolate! This type of chocolate is made without any added sugar and is a great way to satisfy your sweet tooth without the added calories and sugar.

        Sugar-free dark chocolate is made from pure cocoa butter and cocoa beans, with no added sugar. It is also naturally higher in antioxidants than traditional dark chocolate, making it a great choice for those looking for a healthy snack. The rich, bold flavor of dark chocolate is still there, but with no added sugar.
        
        Sugar-free dark chocolate is a great way to satisfy your sweet tooth without the added calories and sugar. It has a rich, bold flavor and is naturally higher in antioxidants than traditional dark chocolate. Plus, it’s a great way to get your daily dose of healthy fats and fiber.
        
        Sugar-free dark chocolate can be used in a variety of recipes, from cakes and cookies to hot chocolate and fondue. You can also enjoy it on its own as a snack. Just be sure to check the label for added sugar, as some brands may add it to make their chocolate sweeter.
        
        If you’re looking for a healthier alternative to traditional dark chocolate, sugar-free dark chocolate is a great option. It has a rich, bold flavor and is naturally higher in antioxidants than regular dark chocolate. Plus, it’s a great way to get your daily dose of healthy fats and fiber. So make the switch to sugar-free dark chocolate today and enjoy a guilt-free sweet treat!`
    },
    {
        id: 5,
        title: 'HER MAJESTY - MILK CHOCOLATE',
        author: 'John McCalister',
        picture: '/blogpics/majestymilk.svg',
        date: '20/12/2022',
        cta_text: `Try this delicious milk chocolate today! Indulge in a moment of pure bliss with our creamy and smooth milk chocolate. Enjoy the sweet, decadent flavor and treat yourself to a little something special. Get yours now!`,
        full_text: `Milk chocolate is one of the world’s most beloved treats. Not only is it delicious and creamy, but it is also incredibly versatile and can be used in a variety of recipes. But what exactly is milk chocolate and how is it made?

        Milk chocolate is made by combining cocoa powder, cocoa butter, and milk powder with sugar. The mixture is then cooled, giving it its characteristic creamy texture. Milk chocolate has a sweeter taste than dark chocolate and can come in a variety of flavors, such as white chocolate and caramel. 
        
        Milk chocolate has been around for centuries and is believed to have been created by the Swiss in the late 19th century. It quickly gained popularity and is now enjoyed all around the world. Milk chocolate is commonly used in baking, such as in cookies and cakes, and it can also be melted down to make a variety of sauces and glazes. 
        
        Milk chocolate has a number of health benefits, such as providing essential minerals and vitamins, including magnesium, zinc, iron, and vitamin B6. It is also a source of antioxidants and healthy fats. The flavonoids in milk chocolate can help reduce inflammation and protect against cardiovascular disease. 
        
        However, milk chocolate also contains a significant amount of sugar and calories, so it is important to enjoy it in moderation. It’s best to opt for dark chocolate, which has more health benefits and less sugar and calories. 
        
        Overall, milk chocolate is a delicious treat that can be enjoyed as part of a balanced diet. It is a great way to indulge your sweet tooth without going overboard.`
    },
    {
        id: 6,
        title: 'CANDY-COATED FUN: IDEAS FOR CREATIVE AND DELICIOUS DESSERRTS',
        author: 'Mary Morris',
        picture: '/blogpics/candycoated.avif',
        date: '28/11/2022',
        cta_text: `If you're looking for a tasty way to make dessert time more fun, look no further! Try out these creative and delicious candy-coated ideas for a sweet treat that's sure to delight. Get creative in the kitchen and make your own candy-coated desserts today!`,
        full_text: `When it comes to desserts, why settle for the same old boring treats? Adding a little extra sweetness to your recipes can make them even more delicious. Candy-coated desserts are the perfect way to satisfy your sweet tooth and make your treats stand out from the crowd. With a few simple ingredients and a bit of creativity, you can make some truly unique and flavorful desserts.

        One of the easiest ways to candy-coat something is to use store-bought candy melts. Simply melt the candy in a bowl and dip your favorite snacks into the melted candy. Once the candy has hardened, you have a delicious and colorful treat that is sure to be a hit. Try dipping Oreos, pretzels, or even marshmallows into the candy melts for a sweet and salty treat.
        
        If you want to get a little more creative with your candy-coated desserts, try using different colors of candy melts to create fun designs and patterns. You can even use multiple colors to create a rainbow effect. You can also add sprinkles, nuts, or other toppings for an extra burst of flavor.
        
        Another great way to make candy-coated desserts is to use candy bars. Simply break the bars into small pieces and mix them into your favorite desserts. This is a great way to add some extra sweetness to cakes, brownies, and other baked goods.
        
        Finally, you can also make candy-coated desserts using melted chocolate. Simply melt your favorite type of chocolate and pour it over your favorite snacks. Once it has cooled and hardened, it will create a delicious and crunchy coating. You can also mix melted chocolate with nuts, sprinkles, or other toppings to create a unique and tasty treat.
        
        Candy-coated desserts are an easy and delicious way to add a little extra sweetness to any occasion. Whether you are looking for a special treat to serve at a birthday party or just want to enjoy a sweet snack, these ideas are sure to hit the spot. With a few simple ingredients, you can create some truly memorable treats that everyone will love.`
    },
    {
        id: 7,
        title: 'THE HISTORY OF CHOCOLATE: A JOURNEY FROM BEAN TO BAR AT YOUR LOCAL CHOCOLATE SHOP',
        author: 'Enzo Adamas',
        picture: '/blogpics/history.avif',
        date: '29/12/2022',
        cta_text: `Experience the sweet journey of chocolate and taste a delicious variety of chocolate bars your local chocolate shop has to offer! Visit your local chocolate shop today to explore the history of chocolate and savor the flavors of the past.`,
        full_text: `Chocolate is one of the world’s favorite treats, and its journey from bean to bar at your local chocolate shop is quite an interesting one. The history of chocolate is one filled with fascinating facts and interesting stories. 

        Chocolate is believed to have originated in the areas around Central and South America, where the cocoa plant was first cultivated. The ancient Aztecs and Mayans were the first to enjoy the sweet treat, and were the first to make a drink from cocoa beans. This drink was made by roasting and grinding cocoa beans and then combining them with water, chili peppers, and other spices. 
        
        In the 16th century, chocolate was brought to Europe by Spanish explorers and soon became a popular treat among the wealthy. It was not until the Industrial Revolution in the 19th century that chocolate became mass produced and affordable for the general public. 
        
        At the same time, advances in technology made it possible to create new forms of chocolate, such as milk chocolate and white chocolate. The first chocolate bar was created in 1847 by a London-based chocolate company named Fry’s.
        
        Today, the process of making chocolate is still largely the same. Cocoa beans are harvested, fermented, dried, and roasted. The beans are then ground into a paste called chocolate liquor, which is then mixed with cocoa butter, sugar, and milk to form a creamy chocolate mixture. This mixture is then molded into bars and cooled. 
        
        When you visit your local chocolate shop, you can find a variety of different types of chocolate, from dark chocolate to milk chocolate to white chocolate. You can also find specialty chocolates, such as truffles, pralines, and ganache. 
        
        The journey of chocolate from bean to bar is an amazing one, and it is a testament to how far chocolate has come over the centuries. So the next time you visit your local chocolate shop, take a moment to appreciate the history of the chocolate you’re about to enjoy!`
    },
    {
        id: 8,
        title: 'DECORATING TIPS FOR HOLIDAY COOKIES',
        author: 'Carla Hernandez',
        picture: '/blogpics/decorcookie.avif',
        date: '05/12/2022',
        cta_text: `Ready to get your holiday baking underway? Try out these easy decorating tips for holiday cookies! From classic frosting to fun sprinkles, you're sure to make delicious treats your family will love. Get creative and experiment with different decorations to make your cookies stand out this holiday season!`,
        full_text: `Decorating holiday cookies is a time-honored tradition that's fun for the whole family. Whether you're an experienced baker or a novice in the kitchen, it's easy to make festive, beautiful cookies with a few simple decorating techniques. Here are some tips to help you decorate your holiday cookies with ease:

        1. Start with a great base. The best way to ensure your cookies look beautiful is to start with a great base. Make sure to use high-quality ingredients and follow a good recipe, so your cookies will be tender and delicious.
        
        2. Use a variety of colors. Using a variety of colors can make your holiday cookies really stand out. Try using bright colors like red, green, and gold, or experiment with pastels for a softer look.
        
        3. Use royal icing. Royal icing is a classic for decorating holiday cookies. It's easy to use and dries quickly, so you can get creative with your designs.
        
        4. Use cookie cutters. Cookie cutters are great for creating fun shapes for your cookies. Choose cutters in festive shapes like stars, snowflakes, or Christmas trees to really get into the holiday spirit.
        
        5. Try using sprinkles. Sprinkles are a great way to add a pop of color and texture to your cookies. Use them to create cool patterns or simply sprinkle them over the top of your cookies for a festive look.
        
        6. Get creative with glaze. Glaze is a great way to make your cookies look even more delicious. Try using different colors of glaze to create cool designs, or use a thin layer of glaze to make your cookies look glossy.
        
        7. Have fun! Decorating holiday cookies should be fun, so don't be afraid to get creative and experiment with different techniques. Use these tips as a starting point, and you'll soon find your own style for decorating cookies.
        
        With these tips, you'll be well on your way to creating beautiful holiday cookies. So grab your ingredients and let the decorating begin!`
    },
    {
        id: 9,
        title: 'COOKIE IDEAS FOR KIDS',
        author: 'Maria Clarkson',
        picture: '/blogpics/kidscookies.avif',
        date: '11/11/2022',
        cta_text: `Try these fun and creative cookie ideas for your kids! Get creative in the kitchen and let their imaginations run wild with these delicious ideas. Let your kids pick their favorite cookie and get baking!`,
        full_text: `Cookies are always a hit with kids, and they can be a great way to get your little ones involved in the kitchen. Whether you’re baking for a birthday party, a special occasion, or just to have a sweet treat, here are some cookie ideas that are sure to delight your kids.

        1. Chocolate Chip Cookies: This classic cookie is a surefire hit with kids. For extra fun, you can use a variety of chips, such as peanut butter chips, white chocolate chips, or butterscotch chips.
        
        2. Oatmeal Raisin Cookies: Oatmeal raisin cookies are a great way to sneak some healthy ingredients into a delicious treat. You can add other ingredients like dried fruits, nuts, or chocolate chips to make them even more flavorful.
        
        3. Sugar Cookies: Sugar cookies are a great way to get creative with cookie cutters and decorations. Kids can have a blast decorating their cookies with colorful sprinkles, icing, and other fun toppings.
        
        4. Peanut Butter Cookies: Who doesn't love peanut butter cookies? These cookies are a great way to get protein in a tasty treat.
        
        5. Shortbread Cookies: Shortbread cookies are a classic treat that’s easy to make, and they make a great base for adding fun decorations.
        
        6. Snickerdoodles: Snickerdoodles are another classic cookie that’s always popular with kids. The combination of cinnamon, sugar, and butter makes them irresistibly delicious.
        
        7. Brownies: Brownies are a great way to satisfy the chocolate cravings of any kid. You can make them with nuts, chocolate chips, or even marshmallows for an extra special treat.
        
        No matter what kind of cookie you decide to make, your kids are sure to love it. Baking with your kids can be a great way to bond and create memories that will last a lifetime. So get in the kitchen and get baking`
    },
];

const Blog = ({ title, full_text, picture }) => {
    return (
        <li className="flex flex-row relative items-center">
            <section className="mr-5 w-24 mt-5 mb-5 flex-row justify-between flex items-center">
                <p>{title}</p>
                <p>{full_text}</p>
            </section>
            <Image
                className="absolute right-3 top-3"
                width={50}
                height={50}
                src={picture}
                alt="profile image"
            />
        </li>
    );
};

const Blogs = () => {
    return (
        <>
            <Header />
            <ul className="flex flex-col items-center justify-around">
                    {blogsConstArray.map((el) => (
                        <Blog key={el.id} {...el} />
                    ))}
                </ul>
            <Footer />
        </>
    );
};

export default Blogs;