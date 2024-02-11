import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../../hooks";
import { Series, Underlay } from "../components";
import kingdomOfBirdsAndBeasts from "../../assets/images/covers/kingdom-of-birds-and-beasts-40.jpg";
import feathersOfSnow from "../../assets/images/covers/feathers-of-snow-50.jpg";
import feathersOfBlood from "../../assets/images/covers/feathers-of-blood-50.jpg";
import kingdomOfFeathers from "../../assets/images/covers/kingdom-of-feathers-50.jpg";
import whispersOfEbony from "../../assets/images/covers/whispers-of-ebony-40.jpg";
import theFlawedPrincess from "../../assets/images/covers/the-flawed-princess-50.jpg";
import theGoldenPrince from "../../assets/images/covers/the-golden-prince-50.jpg";
import queenAvan from "../../assets/images/covers/queen-avan.jpg";
import avansGift from "../../assets/images/covers/avans-gift-50.jpg";
import avansCurse from "../../assets/images/covers/avans-curse-50.jpg";
import avansHeart from "../../assets/images/covers/avans-heart-50.jpg";
import silentMelody from "../../assets/images/covers/silent-melody-50.jpg";
import enchantedMelody from "../../assets/images/covers/enchanted-melody-50.jpg";
import slipperInTheSnow from "../../assets/images/covers/slipper-in-the-snow-40.jpg";
import nettlesInTheSnow from "../../assets/images/covers/nettles-in-the-snow-40.jpg";
import secretsInTheSnow from "../../assets/images/covers/secrets-in-the-snow-40.jpg";
import princessInTheSnow from "../../assets/images/covers/princess-in-the-snow-40.jpg";
import theFoxAndTheTrain from "../../assets/images/covers/the-fox-and-the-train-50.jpg";
import enchantedWaters from "../../assets/images/covers/enchanted-waters-50.jpg";
import enchantedForests from "../../assets/images/covers/enchanted-forests-60.jpg";
import enchantedFlames from "../../assets/images/covers/enchanted-flames-50.jpg";
import onceUponAName from "../../assets/images/covers/once upon a name.jpg";
import windAndSilk from "../../assets/images/covers/wind-and-silk-40.jpg";
import crownOfGlass from "../../assets/images/covers/crown-of-glass-60.jpg";
import theWidowAndTheBeast from "../../assets/images/covers/the-widow-and-the-beast-50.jpg";

const useMuiStyles = makeStyles((theme) => ({
  initialPadding: {
    height: theme.spacing(5),
  },
}));

FantasyBooks.propTypes = {
  tabs: PropTypes.shape({
    fantasyBooks: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default function FantasyBooks({ tabs }) {
  const classes = useStyles(useMuiStyles);

  return (
    <Underlay>
      <div className={classes.initialPadding} />
      <Series
        spotlightedBook={{
          coverSrc: theWidowAndTheBeast,
          title: "the widow and the beast",
          showTitle: true,
          universalBookLink: "https://buy.bookfunnel.com/ranc3n277g",
        }}
        seriesOverview={{
          title: "Kingdoms of the Faery Path",
          paragraphs: [
            "In this world, fairytale monsters are very real...",
            "Faery has been under a curse for two hundred years, twisting its inhabitants into monsters. Now all who walk the Faery Path risk their life and their sanity.",
            "Determined to find her missing husband, Aoife sets off down the Faery Path alone. She knows the rules. She must not eat the fae food, strike a bargain or leave the path. But she discovers a world far more terrifying and beautiful than she ever imagined.",
            "And it doesn’t want her to leave.",
          ],
        }}
        books={[
          {
            title: "the widow and the beast",
            coverSrc: theWidowAndTheBeast,
            universalBookLink: "https://buy.bookfunnel.com/ranc3n277g",
          },
          {
            title: "crown of glass",
            coverSrc: crownOfGlass,
            universalBookLink: "https://buy.bookfunnel.com/1xvalnsk8l",
          },
        ]}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: kingdomOfBirdsAndBeasts,
          title: "Kingdom of Birds and Beasts",
          showTitle: false,
          universalBookLink: "https://buy.bookfunnel.com/yswdzqprc8",
        }}
        seriesOverview={{
          title: "Kingdom of Birds and Beasts",
          paragraphs: [
            "In Brianna’s new world of ice and snow, the coldest things by far are the eyes of her betrothed...",
            "Brianna bears a deadly secret: she’s not the princess she is pretending to be. If the prince finds out, her life will be forfeit and her country plunged into war.",
            "But there is more to the icy prince than meets the eye, and Brianna slowly unravels the secrets of his dark past while surviving in a strange culture.",
            "However her goodness and wit will only get her so far. Terrifying beasts stalk the border and a murderer is at work in the town. They know the truth of Brianna’s identity and will stop at nothing to destroy all she has fought for.",
          ],
        }}
        books={[
          {
            title: "feathers of snow",
            coverSrc: feathersOfSnow,
            universalBookLink: "https://buy.bookfunnel.com/78bqhugido",
            chipLabel: "Read Synopsis",
            chipPath: tabs.feathersOfSnowSynopsis.path,
            showChip: true,
          },
          {
            title: "feathers of blood",
            coverSrc: feathersOfBlood,
            universalBookLink: "https://buy.bookfunnel.com/toob0lyzr1",
            chipLabel: "Read Synopsis",
            chipPath: tabs.feathersOfBloodSynopsis.path,
            showChip: true,
          },
          {
            title: "kingdom of feathers",
            coverSrc: kingdomOfFeathers,
            universalBookLink: "https://buy.bookfunnel.com/tv6fratj19",
          },
          {
            title: "whispers of ebony",
            coverSrc: whispersOfEbony,
            universalBookLink: "https://buy.bookfunnel.com/yrvjg5sjhx",
          },
        ]}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: theGoldenPrince,
          title: "the golden prince",
          showTitle: false,
          universalBookLink: "https://buy.bookfunnel.com/2ffb9p243i",
        }}
        seriesOverview={{
          title: "The Golden Prince: A Rapunzel Retelling",
          paragraphs: [
            "A perfect prince. An engagement to save a kingdom. Too bad it’s all a lie.",
            "Prince Thomas has always been the perfect prince, but now that his kingdom is falling to famine, he must prove his worth and restore the blessing of Spring. All he has to do is find a mysterious woman from a painting and marry her. It’s a quest he’s been born for. He has everything: the looks, the talent, the perseverance. No matter what peril she is in, he will find and rescue her. And he’ll do so with style.",
            "If Maisie has learned one lesson in her life, it’s not to trust anybody. Having been hurt countless times, she lets people see her mask and no deeper. Her practice at deception makes her a master thief, but now she is forgetting which parts of her are real. However, one thing is certain: she does not need any prince to rescue her. In fact, she needs nobody at all.",
            "The hounds of Winter are gathering, leaving death in their wake. The famine is spreading. If Prince Thomas doesn’t marry Maisie, the kingdom will fall. But how can he learn to love somebody with a shattered heart?",
          ],
        }}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: theFlawedPrincess,
          title: "the flawed princess",
          showTitle: false,
          universalBookLink: "https://buy.bookfunnel.com/rqbnrn4zdi",
        }}
        seriesOverview={{
          title: "The Flawed Princess",
          paragraphs: [
            "Is forgiveness too high a cost to save a kingdom?",
            "Violet is hidden away by her father, a provincial lord, for having a deformed foot. She is tired of being ignored and longs to help her people, who have been abused and suppressed by the court for generations. Their ancient magic is almost forgotten.",
            "When she is caught up in a deadly rebellion, Violet is taken hostage by the king and dragged to the capital. A prisoner deprived of friends and family, she is thrown into a dangerous world of politics and strange magic, where men and beasts are bonded together. Violet realises she must quickly learn the rules of the castle in order to be a voice for her forgotten province.",
            "But the bonds that tie people are fragile, and true evil lurks in the shadows of the castle. As war and assassination threaten to break the kingdom apart, Violet realises that to save it, she must learn to forgive her captor.",
            "And maybe even allow herself to be loved.",
          ],
        }}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: queenAvan,
          title: "queen avan",
          showTitle: false,
          universalBookLink: "https://buy.bookfunnel.com/vzugwcntd3",
        }}
        seriesOverview={{
          title: "Queen Avan",
          paragraphs: [
            "Avan’s land is dying.",
            "A washerwoman whose future is bleak, Avan faces starvation. When the capital takes those in her village with tribal magic, she leaves with them, hoping for a better life. Or at least a constant supply of food.",
            "Saving her country, gaining the heart of a prince, and then getting captured by savages wasn’t exactly what she’d had in mind.",
            "But the real threats come from unexpected places and soon everyone she loves is at risk. She must untangle decades of corruption and rid the country of its most powerful leaders or watch her village starve.",
          ],
        }}
        books={[
          {
            title: "queen avan",
            coverSrc: queenAvan,
            universalBookLink: "https://buy.bookfunnel.com/vzugwcntd3",
          },
          {
            title: "avan’s gift",
            coverSrc: avansGift,
          },
          {
            title: "avan’s curse",
            coverSrc: avansCurse,
          },
          {
            title: "avan’s heart",
            coverSrc: avansHeart,
          },
        ]}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: silentMelody,
          title: "silent melody: a pied piper retelling",
          showTitle: true,
          universalBookLink: "https://buy.bookfunnel.com/gaze6dz8dx",
        }}
        seriesOverview={{
          title: "Songs of the Piper",
          paragraphs: [
            "When the Pied Piper came, only three children remained. One was deaf and one was blind. Being deaf meant life was hard for Adelaide in thirteenth century Germany. However, it also saved her from the Pied Piper’s music. When the children were stolen, she was left behind. Now she and her blind friend risk everything to free the children trapped in an eternal dance. But to rescue them she must face the Heartless Queen, who will do anything to keep them, and survive her twisted games. Adelaide finds she has no choice but to trust the man she should hate and hope he is not playing games of his own.If she fails, the children will be lost forever. The ebook version of Silent Melody is exclusive to the Enchanted Kingdoms box set until June to raise money for the charity Puzzle Peace United.",
          ],
        }}
        books={[
          {
            title: "silent melody",
            coverSrc: silentMelody,
            universalBookLink: "https://buy.bookfunnel.com/gaze6dz8dx",
          },
          {
            title: "enchanted melody",
            coverSrc: enchantedMelody,
            universalBookLink: "https://buy.bookfunnel.com/9z7t7wxw44",
          },
        ]}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: enchantedWaters,
          title: "enchanted waters",
          showTitle: true,
          universalBookLink: "https://books2read.com/u/4jYgVo",
          showChip: true,
          isChipLink: false,
          chipLabel: "Charitable",
          chipTooltip:
            "All proceeds donated to charity (Oceana & The Rainforest Foundation)",
        }}
        seriesOverview={{
          title: "A Magical Collection of Short Stories",
          paragraphs: [
            "What really lies beneath the waves?",
            "Dive into our magical collection of short stories written by award-winning and up-and-coming authors and follow the ocean’s call.",
            "Meet murderous kelpies, hear the mermaid’s song, find a kidnapped prince, and explore the beautiful underwater kingdoms. Befriend selkie royalty, break fearsome curses, and swoon as you fall in love.",
          ],
        }}
        books={[
          {
            title: "enchanted waters",
            coverSrc: enchantedWaters,
            universalBookLink: "https://books2read.com/u/4jYgVo",
          },
          {
            title: "enchanted forests",
            coverSrc: enchantedForests,
            universalBookLink: "https://books2read.com/u/mgY7W7",
          },
          {
            title: "enchanted flames",
            coverSrc: enchantedFlames,
            universalBookLink: "https://books2read.com/u/38Oe1O",
          },
        ]}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: onceUponAName,
          title: "Once Upon a Name",
          showTitle: true,
          universalBookLink: "https://books2read.com/u/4E7Lqz",
          showChip: true,
          isChipLink: false,
          chipLabel: "Charitable",
          chipTooltip:
            "All proceeds donated to charity in support of reading and literacy",
        }}
        seriesOverview={{
          title: "Tales of the Strange and Unusual",
          paragraphs: [
            "What’s in a name? Names have power, names have magic, names can set the course for a great destiny.",
            "Once upon a time, twenty author friends accepted a challenge by a fairy tale name generator. Now, twenty new characters have adventurous tales to tell.",
            "In this clean YA anthology, meet goddesses, empresses, countesses, wannabe sorceress apprentices, female leaders of wolf packs, and guardian frog sidekicks. Search for missing persons with a hunter turned detective.",
            "Swoon over the sultana who must prove she is fit to rule. Cavort with our demons, wraiths, and demigods and lose your soul to the Bone Marsh. Root for a genie’s freedom or bite your nails as you pray for the witch to get the spell right. And yes, feel your heart palpitate at unexpected romance.",
            "Escape into our strange and unusual collection of short stories written by award-winning and up-and-coming authors. Join us in far-off lands and learn ... what is in a name.",
          ],
        }}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: windAndSilk,
          title: "Wind and Silk",
          showTitle: true,
          universalBookLink: "https://books2read.com/u/3nq5l8",
        }}
        seriesOverview={{
          title: "A Fantasy Short Story",
          paragraphs: [
            "In a war-torn Empire, where dragons gather in the sky to gorge off human emotions, Fangying has led a sequestered life, so that her stutter and limp do not bring shame upon her family.",
            "Now she must marry a man she has never met so that her father doesn’t get sent to war. It is her desperate hope to hide her condition from her new husband for at least their wedding night.",
            "But when her husband unexpectedly steals her away to the battlefront, can she step out of the shadows and learn she is stronger than anyone ever dreamed?",
          ],
        }}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: slipperInTheSnow,
          title: "Slipper in the Snow",
          showTitle: true,
          universalBookLink: "https://buy.bookfunnel.com/6bmb0ys179",
        }}
        seriesOverview={{
          title: "A Christmas Fairytale Short Story",
          paragraphs: [
            "Burge has always been famous for its spectacular Christmas Eve ball, and this year everyone knows it will be exceptional. The King lies on his deathbed, and Prince Simeon is looking for a wife. Princesses and ladies alike are flocking from around the world seeking his hand, but the only person he has eyes for is the mysterious stranger who appears from nowhere with a terrible secret.",
          ],
        }}
        books={[
          {
            title: "slipper in the snow",
            coverSrc: slipperInTheSnow,
            universalBookLink: "https://buy.bookfunnel.com/6bmb0ys179",
          },
          {
            title: "nettles in the snow",
            coverSrc: nettlesInTheSnow,
            universalBookLink: "https://buy.bookfunnel.com/17pdaxiyj2",
          },
          {
            title: "secrets in the snow",
            coverSrc: secretsInTheSnow,
            universalBookLink: "https://buy.bookfunnel.com/fx6wcqo13q",
          },
          {
            title: "princess in the snow",
            coverSrc: princessInTheSnow,
            universalBookLink: "https://buy.bookfunnel.com/xb2ge4o9as",
          },
        ]}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: theFoxAndTheTrain,
          title: "the fox and the train",
          showTitle: false,
          universalBookLink: "https://books2read.com/u/3Gz5RL",
        }}
        seriesOverview={{
          title: "The Fox and the Train",
          paragraphs: [
            "“Sometimes the most important battles are the ones that look like they cannot be won, but we fight anyway. Fight now, little one, or your fear will bring death.”",
            "Isolated in a village surrounded by deep snow, thirteen year old Anna loses herself in the fairytales of the forbidding forest behind her house. Benny, an autistic inventor, becomes her only friend as she watches her family leave one by one.",
            "When disaster strikes in the coal mine, men from the village are trapped underground, including Anna’s brother. The only train to the mine is destroyed and the adults of the village quickly lose hope for their loved ones.",
            "But Anna and Benny refuse to give up and become the miners’ only chance of salvation, travelling through the dark forest alone. Between those frozen trees, things aren’t as they seem and soon Anna finds herself in a beautiful but dangerous fairytale of her own.",
          ],
        }}
      />
    </Underlay>
  );
}
