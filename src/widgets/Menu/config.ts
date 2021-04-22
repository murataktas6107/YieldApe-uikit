import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.YieldApeswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.YieldApeswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://YieldApeswap.info",
      },
      {
        label: "Tokens",
        href: "https://YieldApeswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://YieldApeswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://YieldApeswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.YieldApeswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/YieldApeswap",
      },
      {
        label: "Docs",
        href: "https://docs.YieldApeswap.finance",
      },
      {
        label: "Blog",
        href: "https://YieldApeswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/YieldApeswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/YieldApeSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/YieldApeSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/YieldApeSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/YieldApeswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/YieldApeswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/YieldApeswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/YieldApeSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/YieldApeswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/YieldApeswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/YieldApeswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/YieldApeSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/YieldApeSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/YieldApeswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
