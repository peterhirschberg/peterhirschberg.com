import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AdventurePlay from '@/views/Adventure/AdventurePlay.vue'
import JanesPlay from '@/views/Janes/JanesPlay.vue'
import TGShips from '@/views/TGShips/TGShips.vue'
import SolidStates from '@/views/SolidStates/SolidStates.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import EmailView from '@/views/EmailView.vue'
import ResumeView from '@/views/ResumeView.vue'
import LunaCityBookView from '@/views/LunaCityBookView.vue'
import SoftwareView from '@/views/SoftwareView.vue'
import ArcadeGamesView from '@/views/ArcadeGamesView.vue'
import ToysCollectiblesView from '@/views/ToysCollectiblesView.vue'
import ChasingGhostsMovieView from '@/views/ChasingGhostsMovieView.vue'
import SpaceInvadersMovieView from '@/views/SpaceInvadersMovieView.vue'
import NGTVView from '@/views/NGTVView.vue'
import LunaCityArcadeMirrorView from '@/views/Mirrors/LunaCityArcadeMirrorView.vue'
import TimeOutTunnelMirrorView from '@/views/Mirrors/TimeOutTunnelMirrorView.vue'
import GalaxIVView from '@/views/GalaxIVView.vue'
import TalkingLearningMachineView from '@/views/TalkingLearningMachineView.vue'
import SpaceDustView from '@/views/SpaceDustView.vue'
import SpaceFoodSticksView from '@/views/SpaceFoodSticksView.vue'
import HandheldGamesView from '@/views/HandheldGamesView.vue'
import VintageComputersView from '@/views/VintageComputersView.vue'
import ShakeysPizzaView from '@/views/ShakeysPizzaView.vue'
import ShowRodsView from '@/views/ShowRodsView.vue'
import BattlestarGalacticaView from '@/views/BattlestarGalacticaView.vue'
import MicronautsView from '@/views/MicronautsView.vue'
import MusicILikeView from '@/views/MusicILikeView.vue'
import HelicoptersView from '@/views/HelicoptersView.vue'
import BigTrakView from '@/views/BigTrakView.vue'
import VectrexView from '@/views/VectrexView.vue'
import AutographsView from '@/views/AutographsView.vue'
import ArcadeScansView from '@/views/ArcadeScansView.vue'
import CurrentGameroomView from '@/views/CurrentGameroomView.vue'
import ArcadeAdsView from '@/views/ArcadeAdsView.vue'
import ArcadeCardsAndStickersView from '@/views/ArcadeCardsAndStickersView.vue'
import ArcadeBumperStickersView from '@/views/ArcadeBumperStickersView.vue'
import ArcadeMadView from '@/views/ArcadeMadView.vue'
import ArcadeMusicView from '@/views/ArcadeMusicView.vue'
import ArcadeScratchView from '@/views/ArcadeScratchView.vue'
import ArcadePacmanColoringBookView from '@/views/ArcadePacmanColoringBookView.vue'
import ArcadeQbertColoringBookView from '@/views/ArcadeQbertColoringBookView.vue'
import ArcadeDragonsLairColoringBookView from '@/views/ArcadeDragonsLairColoringBookView.vue'
import ArcadeAdventuresOfQbertBookView from '@/views/ArcadeAdventuresOfQbertBookView.vue'
import ArcadeQbertQuestionsBookView from '@/views/ArcadeQbertQuestionsBookView.vue'
import BattlestarGalacticaCastView from '@/views/BattlestarGalacticaCastView.vue'
import BattlestarGalacticaArtAndPostersView from '@/views/BattlestarGalacticaArtAndPostersView.vue'
import BattlestarGalacticaScreenshotsView from '@/views/BattlestarGalacticaScreenshotsView.vue'
import BattlestarGalacticaToysView from '@/views/BattlestarGalacticaToysView.vue'
import BattlestarGalacticaBlueprintsView from '@/views/BattlestarGalacticaBlueprintsView.vue'
import BattlestarGalacticaGalacticonView from '@/views/BattlestarGalacticaGalacticonView.vue'
import BattlestarGalacticaAutographsView from '@/views/BattlestarGalacticaAutographsView.vue'
import BattlestarGalacticaCrackedView from '@/views/BattlestarGalacticaCrackedView.vue'
import BattlestarGalacticaMadView from '@/views/BattlestarGalacticaMadView.vue'
import MyToysView from '@/views/MyToysView.vue'
import MicrovisionView from '@/views/MicrovisionView.vue'
import VertibirdView from '@/views/VertibirdView.vue'
import SFOToyExhibitView from '@/views/SFOToyExhibitView.vue'
import SimonView from '@/views/SimonView.vue'
import VectorTanksView from '@/views/VectorTanksView.vue'
import BattlestarGalacticaBTSView from '@/views/BattlestarGalacticaBTSView.vue'
import HotwheelsView from '@/views/HotwheelsView.vue'
import TronRestoreView from '@/views/TronRestoreView.vue'
import GamesILikeView from '@/views/GamesILikeView.vue'
import GeometryWarsView from '@/views/GeometryWarsView.vue'
import BioshockView from '@/views/BioshockView.vue'
import DonBluthView from '@/views/DonBluthView.vue'
import TVFilmView from '@/views/TVFilmView.vue'
import CarsView from '@/views/CarsView.vue'
import GuestBook from '@/views/Guestbook/GuestBook.vue'
import TikiHutView from '@/views/TikiHutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Peter Hirschberg - Home' }
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: PortfolioView,
    meta: { title: 'Peter Hirschberg - Porfolio' }
  },
  {
    path: '/Email',
    name: 'Email',
    component: EmailView,
    meta: { title: 'Peter Hirschberg - Email' }
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: ResumeView,
    meta: { title: 'Peter Hirschberg - Resume' }
  },
  {
    path: '/LunaCityBook',
    name: 'LunaCityBook',
    component: LunaCityBookView,
    meta: { title: 'Peter Hirschberg - The Story of Luna City Book' }
  },
  {
    path: '/Software',
    name: 'Software',
    component: SoftwareView,
    meta: { title: 'Peter Hirschberg - My Software' }
  },
  {
    path: '/ArcadeGames',
    name: 'ArcadeGames',
    component: ArcadeGamesView,
    meta: { title: 'Peter Hirschberg - Arcade Games' }
  },
  {
    path: '/ToysCollectibles',
    name: 'ToysCollectibles',
    component: ToysCollectiblesView,
    meta: { title: 'Peter Hirschberg - Toys & Collectibles' }
  },
  {
    path: '/ChasingGhostsMovie',
    name: 'ChasingGhostsMovie',
    component: ChasingGhostsMovieView,
    meta: { title: 'Peter Hirschberg - Chasing Ghosts' }
  },
  {
    path: '/SpaceInvadersMovie',
    name: 'SpaceInvadersMovie',
    component: SpaceInvadersMovieView,
    meta: { title: 'Peter Hirschberg - The Space Invaders' }
  },
  {
    path: '/NGTV',
    name: 'NGTV',
    component: NGTVView,
    meta: { title: 'Peter Hirschberg - NGTV: The Pigeon Murders' }
  },
  {
    path: '/AdventurePlay',
    name: 'AdventurePlay',
    component: AdventurePlay,
    meta: { title: 'Peter Hirschberg - Adventure: Revisited' }
  },
  {
    path: '/JanesPlay',
    name: 'JanesPlay',
    component: JanesPlay,
    meta: { title: 'Peter Hirschberg - Jane\'s Program' }
  },
  {
    path: '/TGShips',
    name: 'TGShips',
    component: TGShips,
    meta: { title: 'Peter Hirschberg - "TailGunner" Ships' }
  },
  {
    path: '/SolidStates',
    name: 'SolidStates',
    component: SolidStates,
    meta: { title: 'Peter Hirschberg - Atari "Solid States" Demo' }
  },
  {
    path: '/LunaCityArcadeMirror',
    name: 'LunaCityArcadeMirror',
    component: LunaCityArcadeMirrorView,
    meta: { title: 'Peter Hirschberg - Luna City Arcade Mirror' }
  },
  {
    path: '/TimeOutTunnelMirror',
    name: 'TimeOutTunnelMirror',
    component: TimeOutTunnelMirrorView,
    meta: { title: 'Peter Hirschberg - Time-Out Tunnel Mirror' }
  },
  {
    path: '/GalaxIV',
    name: 'GalaxIV',
    component: GalaxIVView,
    meta: { title: 'Peter Hirschberg - Galax IV' }
  },
  {
    path: '/TalkingLearningMachine',
    name: 'TalkingLearningMachine',
    component: TalkingLearningMachineView,
    meta: { title: 'Peter Hirschberg - Talking Learning Machine' }
  },
  {
    path: '/SpaceDust',
    name: 'SpaceDust',
    component: SpaceDustView,
    meta: { title: 'Peter Hirschberg - Space Dust Candy' }
  },
  {
    path: '/SpaceFoodSticks',
    name: 'SpaceFoodSticks',
    component: SpaceFoodSticksView,
    meta: { title: 'Peter Hirschberg - Space Food Sticks' }
  },
  {
    path: '/HandheldGames',
    name: 'HandheldGames',
    component: HandheldGamesView,
    meta: { title: 'Peter Hirschberg - Handheld Games' }
  },
  {
    path: '/VintageComputers',
    name: 'VintageComputers',
    component: VintageComputersView,
    meta: { title: 'Peter Hirschberg - Vintage Computers' }
  },
  {
    path: '/ShakeysPizza',
    name: 'ShakeysPizza',
    component: ShakeysPizzaView,
    meta: { title: 'Peter Hirschberg - Shakey\'s Pizza' }
  },
  {
    path: '/ShowRods',
    name: 'ShowRods',
    component: ShowRodsView,
    meta: { title: 'Peter Hirschberg - Show Rods' }
  },
  {
    path: '/BattlestarGalactica',
    name: 'BattlestarGalactica',
    component: BattlestarGalacticaView,
    meta: { title: 'Peter Hirschberg - Battlestar Galactica' }
  },
  {
    path: '/Micronauts',
    name: 'Micronauts',
    component: MicronautsView,
    meta: { title: 'Peter Hirschberg - Micronauts' }
  },
  {
    path: '/Helicopters',
    name: 'Helicopters',
    component: HelicoptersView,
    meta: { title: 'Peter Hirschberg - Helicopters' }
  },
  {
    path: '/MusicILike',
    name: 'MusicILike',
    component: MusicILikeView,
    meta: { title: 'Peter Hirschberg - Music I Like' }
  },
  {
    path: '/BigTrak',
    name: 'BigTrak',
    component: BigTrakView,
    meta: { title: 'Peter Hirschberg - Big Trak' }
  },
  {
    path: '/Vectrex',
    name: 'Vectrex',
    component: VectrexView,
    meta: { title: 'Peter Hirschberg - Vectrex' }
  },
  {
    path: '/CurrentGameroom',
    name: 'CurrentGameroom',
    component: CurrentGameroomView,
    meta: { title: 'Peter Hirschberg - Current Gameroom' }
  },
  {
    path: '/ArcadeScans',
    name: 'ArcadeScans',
    component: ArcadeScansView,
    meta: { title: 'Peter Hirschberg - Arcade Scans' }
  },
  {
    path: '/Autographs',
    name: 'Autographs',
    component: AutographsView,
    meta: { title: 'Peter Hirschberg - My Autographs' }
  },

  {
    path: '/ArcadeAds',
    name: 'ArcadeAds',
    component: ArcadeAdsView,
    meta: { title: 'Peter Hirschberg - Arcade Ads' }
  },
  {
    path: '/ArcadeCardsAndStickers',
    name: 'ArcadeCardsAndStickers',
    component: ArcadeCardsAndStickersView,
    meta: { title: 'Peter Hirschberg - Arcade Cards & Stickers' }
  },
  {
    path: '/ArcadeBumperStickers',
    name: 'ArcadeBumperStickers',
    component: ArcadeBumperStickersView,
    meta: { title: 'Peter Hirschberg - Arcade Bumper Stickers' }
  },
  {
    path: '/ArcadeMusic',
    name: 'ArcadeMusic',
    component: ArcadeMusicView,
    meta: { title: 'Peter Hirschberg - Arcade Music' }
  },
  {
    path: '/ArcadeMad',
    name: 'ArcadeMad',
    component: ArcadeMadView,
    meta: { title: 'Peter Hirschberg - Arcade Mad Magazine' }
  },
  {
    path: '/ArcadeScratch',
    name: 'ArcadeScratch',
    component: ArcadeScratchView,
    meta: { title: 'Peter Hirschberg - McDonald\'s Arcade Scratch and Win' }
  },
  {
    path: '/ArcadePacmanColoringBook',
    name: 'ArcadePacmanColoringBook',
    component: ArcadePacmanColoringBookView,
    meta: { title: 'Peter Hirschberg - Pac-Man Coloring Book' }
  },
  {
    path: '/ArcadeQbertColoringBook',
    name: 'ArcadeQbertColoringBook',
    component: ArcadeQbertColoringBookView,
    meta: { title: 'Peter Hirschberg - Q*Bert Coloring Book' }
  },
  {
    path: '/ArcadeDragonsLairColoringBook',
    name: 'ArcadeDragonsLairColoringBook',
    component: ArcadeDragonsLairColoringBookView,
    meta: { title: 'Peter Hirschberg - Dragon\'s Lair Coloring Book' }
  },
  {
    path: '/ArcadeAdventuresOfQbertBook',
    name: 'ArcadeAdventuresOfQbertBook',
    component: ArcadeAdventuresOfQbertBookView,
    meta: { title: 'Peter Hirschberg - Adventures of Q*Bert Book' }
  },
  {
    path: '/ArcadeQbertQuestionsBook',
    name: 'ArcadeQbertQuestionsBook',
    component: ArcadeQbertQuestionsBookView,
    meta: { title: 'Peter Hirschberg - Q*Bert\'s Quazy Questions Book' }
  },
  {
    path: '/BattlestarGalacticaCast',
    name: 'BattlestarGalacticaCast',
    component: BattlestarGalacticaCastView,
    meta: { title: 'Peter Hirschberg - Battlestar Galactica - Cast' }
  },
  {
    path: '/BattlestarGalacticaArtAndPosters',
    name: 'BattlestarGalacticaArtAndPosters',
    component: BattlestarGalacticaArtAndPostersView,
    meta: { title: 'Peter Hirschberg - Battlestar Galactica - Posters and Artwork' }
  },
  {
    path: '/BattlestarGalacticaScreenshots',
    name: 'BattlestarGalacticaScreenshots',
    component: BattlestarGalacticaScreenshotsView,
    meta: { title: 'Peter Hirschberg - Battlestar Galactica - Screenshots' }
  },
  {
    path: '/BattlestarGalacticaToys',
    name: 'BattlestarGalacticaToys',
    component: BattlestarGalacticaToysView,
    meta: { title: 'Peter Hirschberg - Battlestar Galactica - Toys' }
  },
  {
    path: '/BattlestarGalacticaBlueprints',
    name: 'BattlestarGalacticaBlueprints',
    component: BattlestarGalacticaBlueprintsView,
    meta: { title: 'Peter Hirschberg - Battlestar Galactica - Blueprints' }
  },
  {
    path: '/BattlestarGalacticaGalacticon',
    name: 'BattlestarGalacticaGalacticon',
    component: BattlestarGalacticaGalacticonView,
    meta: { title: 'Peter Hirschberg - Battlestar Galactica - Galacticon 2013' }
  },
  {
    path: '/BattlestarGalacticaAutographs',
    name: 'BattlestarGalacticaAutographs',
    component: BattlestarGalacticaAutographsView,
    meta: { title: 'Peter Hirschberg - Battlestar Galactica - Autographs' }
  },
  {
    path: '/BattlestarGalacticaCracked',
    name: 'BattlestarGalacticaCracked',
    component: BattlestarGalacticaCrackedView,
    meta: { title: 'Peter Hirschberg - Battlestar Galactica - Cracked Magazine' }
  },
  {
    path: '/BattlestarGalacticaMad',
    name: 'BattlestarGalacticaMad',
    component: BattlestarGalacticaMadView,
    meta: { title: 'Peter Hirschberg - Battlestar Galactica - Mad Magazine' }
  },
  {
    path: '/MyToys',
    name: 'MyToys',
    component: MyToysView,
    meta: { title: 'Peter Hirschberg - My Toys' }
  },
  {
    path: '/Microvision',
    name: 'Microvision',
    component: MicrovisionView,
    meta: { title: 'Peter Hirschberg - MicroVision' }
  },
  {
    path: '/Vertibird',
    name: 'Vertibird',
    component: VertibirdView,
    meta: { title: 'Peter Hirschberg - Vertibird' }
  },
  {
    path: '/SFOToyExhibit',
    name: 'SFOToyExhibit',
    component: SFOToyExhibitView,
    meta: { title: 'Peter Hirschberg - Japanese Art & Toy Exhibit' }
  },
  {
    path: '/Simon',
    name: 'Simon',
    component: SimonView,
    meta: { title: 'Peter Hirschberg - Simon' }
  },
  {
    path: '/VectorTanks',
    name: 'VectorTanks',
    component: VectorTanksView,
    meta: { title: 'Peter Hirschberg - Vector Tanks' }
  },
  {
    path: '/BattlestarGalacticaBTS',
    name: 'BattlestarGalacticaBTS',
    component: BattlestarGalacticaBTSView,
    meta: { title: 'Peter Hirschberg - Battlestar Galactica - Behind The Scenes' }
  },
  {
    path: '/Hotwheels',
    name: 'Hotwheels',
    component: HotwheelsView,
    meta: { title: 'Peter Hirschberg - Hot Wheels' }
  },
  {
    path: '/TronRestore',
    name: 'TronRestore',
    component: TronRestoreView,
    meta: { title: 'Peter Hirschberg - My Tron Restoration' }
  },
  {
    path: '/GamesILike',
    name: 'GamesILike',
    component: GamesILikeView,
    meta: { title: 'Peter Hirschberg - Games I Like' }
  },
  {
    path: '/Bioshock',
    name: 'Bioshock',
    component: BioshockView,
    meta: { title: 'Peter Hirschberg - Bioshock' }
  },
  {
    path: '/GeometryWars',
    name: 'GeometryWars',
    component: GeometryWarsView,
    meta: { title: 'Peter Hirschberg - Geometry Wars' }
  },
  {
    path: '/DonBluth',
    name: 'DonBluth',
    component: DonBluthView,
    meta: { title: 'Peter Hirschberg - Don Bluth Animation' }
  },
  {
    path: '/TVFilm',
    name: 'TVFilm',
    component: TVFilmView,
    meta: { title: 'Peter Hirschberg - Film & TV I Like' }
  },
  {
    path: '/Cars',
    name: 'Cars',
    component: CarsView,
    meta: { title: 'Peter Hirschberg - Cars' }
  },
  {
    path: '/Guestbook',
    name: 'Guestbook',
    component: GuestBook,
    meta: { title: 'Peter Hirschberg - Guestbook' }
  },
  {
    path: '/TikiHut',
    name: 'TikitHut',
    component: TikiHutView,
    meta: { title: 'Peter Hirschberg - The Enchanted Tiki Hut' }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
