import CategoryBox from "@/components/ui/category-box";
import GamesCarousel from "@/components/ui/games-carousel";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { GamesCarouselProps } from "@/lib/prop_types";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <CategoryBox category="Top Games">
            <GamesCarousel games={gamesData} />
        </CategoryBox>
    </main>
  );
}

const gamesData = [
    {
        "id": "53484",
        "title": "Physical Balls 2048",
        "description": "Welcome to the exciting world of Physical Balls 2048! In this game, your goal is to merge balls with the same numbers and get a bigger ball. This physics-based puzzle will keep you occupied for hours on end.",
        "instructions": "To move the ball mdash swipe your finger mouse cursor left or right Aim and release the ball Merge physical balls with the same numbers to get a bigger ball You need to get a ball with the same number as the ball at the bottom and when they merge ",
        "url": "https://html5.gamemonetize.com/s7zpyhhgknkfxjlm1icpief9qt7u2waf/",
        "category": "Puzzle",
        "tags": "2048, 3D, Ball, Hypercasual, Physics",
        "thumb": "https://img.gamemonetize.com/s7zpyhhgknkfxjlm1icpief9qt7u2waf/512x384.jpg",
        "width": "800",
        "height": "600"
    },
    {
        "id": "53455",
        "title": "Penki",
        "description": "Penki introduces an innovative approach to the beloved BreakOut-style gaming experience! Dive into a world of endless entertainment as you explore the intricately designed wood backgrounds, with a selection of seven visually stunning options to captivate your senses. With three unique balls at your disposal, each offering its own set of challenges and strategies, the excitement never wanes. Aim for the stars as you strive to attain three prestigious trophies, showcasing your mastery of the game.",
        "instructions": "Mouse click or tap to play",
        "url": "https://html5.gamemonetize.com/bgmodnejal1s72m1n2mxe6golo0h3y9l/",
        "category": "Hypercasual",
        "tags": "Arcade, Arkanoid, Ball, Block, Boy, Casual, endless, HTML, HTML5, Hypercasual, Mobile, Pinball, Retro",
        "thumb": "https://img.gamemonetize.com/bgmodnejal1s72m1n2mxe6golo0h3y9l/512x384.jpg",
        "width": "600",
        "height": "1024"
    },
    {
        "id": "53122",
        "title": "Easter  Tic Tac Toe",
        "description": "Celebrate the joy and excitement of Easter with Easter Tic Tac Toe &ndash; a delightful twist on the classic game of strategy and skill! Dive into a world of colorful Easter eggs, fluffy bunnies, and cheerful springtime motifs as you engage in friendly competition with friends and family.",
        "instructions": "Click or Tap",
        "url": "https://html5.gamemonetize.com/ej16dre4pi8erpsx3dt8i2b9jo02ucev/",
        "category": "Puzzle",
        "tags": "Board, Easter, Family",
        "thumb": "https://img.gamemonetize.com/ej16dre4pi8erpsx3dt8i2b9jo02ucev/512x384.jpg",
        "width": "560",
        "height": "854"
    },
    {
        "id": "53485",
        "title": "Army Run Merge",
        "description": "Embark on an exhilarating journey of strategy and speed in this adrenaline-pumping runner game! Merge weapons to forge formidable alliances and build your unstoppable army. Harness your tactical prowess to ascend through the ranks and unlock powerful, high-level weaponry. Are you ready to merge, strategize, and dominate the battlefield?",
        "instructions": "Mouse",
        "url": "https://html5.gamemonetize.com/gpqaajh48rsts0m13yuxfk1bpbugkxfj/",
        "category": "Shooting",
        "tags": "running, Shooter",
        "thumb": "https://img.gamemonetize.com/gpqaajh48rsts0m13yuxfk1bpbugkxfj/512x384.jpg",
        "width": "1920",
        "height": "1080"
    },
    {
        "id": "51903",
        "title": "Word search html5",
        "description": "Word search HTML5 is a game that consists of more puzzle word searches with celebrities, Harry Potter, history, food, chemistry, and physics. You can play also a random level by clicking the button play a random level.",
        "instructions": "Mouse or finger for touch screen devices ",
        "url": "https://html5.gamemonetize.com/gbxqldjzn51a05z2wtefw34krembgbq4/",
        "category": "Puzzle",
        "tags": "Puzzle, Word",
        "thumb": "https://img.gamemonetize.com/gbxqldjzn51a05z2wtefw34krembgbq4/512x384.jpg",
        "width": "360",
        "height": "640"
    },
    {
        "id": "52887",
        "title": "Wheel Balancer 3D",
        "description": "Ensure optimal performance by selecting the appropriate wheel for your specific platform. Wheel Balancer 3D guides you through the process of adjusting and matching the perfect wheel type to your needs, ensuring a smooth and efficient operation. This vital tool helps in enhancing your vehicles balance and stability, tailored to suit various platforms for an enhanced driving experience. Website Developer <a href='https://www.kizi10.org/'>https://www.kizi10.org/</a>",
        "instructions": "Space to jump or click left mouse to change wheels click on button number 1-2 or 4 ",
        "url": "https://html5.gamemonetize.com/t0podq70whnmembcppem1tp8665qaqc0/",
        "category": "Hypercasual",
        "tags": "1 Player, Android, Balance, HTML5, Hypercasual, iPad, iPhone, Kids, Mentolatux, Mobile, Physics, Skill",
        "thumb": "https://img.gamemonetize.com/t0podq70whnmembcppem1tp8665qaqc0/512x384.jpg",
        "width": "800",
        "height": "600"
    },
    {
        "id": "46163",
        "title": "Retro Tower Defense",
        "description": "Retro Tower Defense is a classic tower defense game with a retro twist. In this game, you must use your strategic skills to place towers and defend your base from waves of enemies. The game features a variety of towers to choose from, each with its own unique abilities. You can also upgrade your towers to make them even more powerful. As you progress through the game, you will face increasingly difficult enemies. Will you have what it takes to defend your base and win the game? Retro Tower Defense is a fun and challenging tower defense game that is sure to test your strategic skills.",
        "instructions": "Desktop Click and drag the left button of the mouse to weapon Mobile Click and drag the left button of the mouse to weapon ",
        "url": "https://html5.gamemonetize.com/zx10m4tgulf0sepadc0n2ahpft0wqr8y/",
        "category": "Adventure",
        "tags": "Action, Adventure, amazing, Fight, Fighting, free html5 games for your website, HTML, html games for your website, HTML5, html5 games, html5 games for your site, NapTech Games, Tower Defense, War",
        "thumb": "https://img.gamemonetize.com/zx10m4tgulf0sepadc0n2ahpft0wqr8y/512x384.jpg",
        "width": "1280",
        "height": "720"
    },
    {
        "id": "48911",
        "title": "From Zombie To Glam A Spooky",
        "description": "Embark on a spooktacular journey with Ellie in From Zombie to Glam: A Spooky Transformation! Help her shed her undead appearance and embrace a new, ordinary life. Dive into levels of makeover, hand clean, makeup, nail decor, and dress-up for an epic Halloween makeover!",
        "instructions": "Click and interact for makeover cleaning makeup and dress-up Transform Ellie seamlessly from a zombie to a glam ordinary girl Enjoy the spooky-chic Halloween fun ",
        "url": "https://html5.gamemonetize.com/f8i7q0hmeirg49gv2mjhfcqgw1l0vs6f/",
        "category": "Girls",
        "tags": "Doctor, Dress Up, Kids, Surgery, Zombie",
        "thumb": "https://img.gamemonetize.com/f8i7q0hmeirg49gv2mjhfcqgw1l0vs6f/512x384.jpg",
        "width": "800",
        "height": "600"
    },
    {
        "id": "53473",
        "title": "Easter Battle Guys",
        "description": "Hello, are you up for the Easter egg hunt competition? Choose one of the Jelly Bon characters and start collecting the eggs. You should compete with your friend. Be careful. Collect all the eggs without falling off the platform. Be cautious to outsmart your friend and collect all the eggs. Watch out for sharp rotating knives coming from the sides and above, they can kill you and your friend. If you make a mistake, you lose, and your friend wins. Be fast and collect all the eggs. The one who collects the most eggs wins.",
        "instructions": "The red player moves using the WASD keys The blue player moves using the arrow keys The one who collects 50 eggs wins Collect 50 eggs as quickly as possible ",
        "url": "https://html5.gamemonetize.com/9s8bcqrvqsr6jk7b70tu7n840gat1mrt/",
        "category": "Arcade",
        "tags": "2 Player, 2 Player Games, 2D, Adventure, Arcade, Arena, Battle, Boys, Fall Boys, Fall Guys, Pixel",
        "thumb": "https://img.gamemonetize.com/9s8bcqrvqsr6jk7b70tu7n840gat1mrt/512x384.jpg",
        "width": "800",
        "height": "600"
    },
    {
        "id": "53459",
        "title": "Fill the Coffee Cup",
        "description": "Welcome to Fill the Coffee Cup Game! Simply fill the cup with coffee by drawing a path. Try to find the best way to complete each challenging level. You can come up with your own solution so be creative and dont be afraid to think outside the box!",
        "instructions": "Mouse click or tap to play",
        "url": "https://html5.gamemonetize.com/6uhr0yc5qht4vuiqrpf9b57kgfs5ljlt/",
        "category": "",
        "tags": "",
        "thumb": "https://img.gamemonetize.com/6uhr0yc5qht4vuiqrpf9b57kgfs5ljlt/512x384.jpg",
        "width": "720",
        "height": "1280"
    },
]