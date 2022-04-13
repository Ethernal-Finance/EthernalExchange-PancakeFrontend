import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon,  DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.pancakeswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  
  {
    label: "Developers",
    items: [
      
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/ethernalfinance",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/Ethernalfinance",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/ethernalfinanceindonesiaarmy",
      },
      {
        label: "中文",
        href: "https://t.me/ethernalfinancecn",
      },
      
      {
        label: "Italiano",
        href: "https://t.me/ethernalfinanceit",
      },
      {
        label: "русский",
        href: "https://t.me/ethernalru",
      },
      {
        label: "Announcements",
        href: "https://t.me/EthernalFinanceNews",
      },
    ],
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/x9PQe9Ta5K",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
