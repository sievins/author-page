import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../../hooks";
import Underlay from "../underlay";
import { Series } from "../components";
import kingdomOfBirdsAndBeasts from "../../assets/images/covers/kingdom-of-birds-and-beasts-40.jpg";
import feathersOfSnow from "../../assets/images/covers/feathers-of-snow-50.jpg";
import feathersOfBlood from "../../assets/images/covers/feathers-of-blood-50.jpg";
import kingdomOfFeathers from "../../assets/images/covers/kingdom-of-feathers-50.jpg";
import theFlawedPrincess from "../../assets/images/covers/the-flawed-princess-50.jpg";
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
          universalBookLink:
            "https://storyoriginapp.com/universalbooklinks/fb91ebf8-fd1a-11ec-8638-cfd1208557e7",
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
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/fb91ebf8-fd1a-11ec-8638-cfd1208557e7",
          },
          {
            title: "crown of glass - coming april 2023",
            coverSrc: crownOfGlass,
          },
        ]}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: kingdomOfBirdsAndBeasts,
          title: "Kingdom of Birds and Beasts",
          universalBookLink:
            "https://storyoriginapp.com/universalbooklinks/1356076a-053b-11ed-8065-2753e514144d",
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
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/40987692-2912-11eb-8eba-9744d8f5a192",
            chipLabel: "Read Synopsis",
            chipPath: tabs.feathersOfSnowSynopsis.path,
            showChip: true,
          },
          {
            title: "feathers of blood",
            coverSrc: feathersOfBlood,
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/f9375808-8e2a-11eb-81ee-d7f4d46dc19f",
            chipLabel: "Read Synopsis",
            chipPath: tabs.feathersOfBloodSynopsis.path,
            showChip: true,
          },
          {
            title: "kingdom of feathers",
            coverSrc: kingdomOfFeathers,
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/653c193c-852c-11ec-bbb9-8f1c86eb3df8",
          },
        ]}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: theFlawedPrincess,
          title: "the flawed princess",
          showTitle: false,
          universalBookLink:
            "https://storyoriginapp.com/universalbooklinks/4ece9e5a-b81e-11e9-9ba7-3f8319817f47",
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
          universalBookLink:
            "https://storyoriginapp.com/universalbooklinks/9ee16a02-03e6-11eb-a984-7f87e4d8d0f8",
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
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/9ee16a02-03e6-11eb-a984-7f87e4d8d0f8",
          },
          {
            title: "avan’s gift",
            coverSrc: avansGift,
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/e883b5d8-aa55-11ea-8807-5f6c379480ec",
          },
          {
            title: "avan’s curse",
            coverSrc: avansCurse,
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/c25a51ce-ab17-11ea-bc06-1fe0be380c66",
          },
          {
            title: "avan’s heart",
            coverSrc: avansHeart,
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/e12c05fe-d973-11ea-a727-0f2df3cfb52c",
          },
        ]}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: silentMelody,
          title: "silent melody: a pied piper retelling",
          showTitle: true,
          universalBookLink:
            "https://www.amazon.co.uk/Silent-Melody-Piper-Retelling-Songs/dp/B08YQR638M",
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
            universalBookLink:
              "https://www.amazon.co.uk/Silent-Melody-Piper-Retelling-Songs/dp/B08YQR638M",
          },
          {
            title: "enchanted melody",
            coverSrc: enchantedMelody,
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/e4cd32da-2911-11eb-869c-1f3b2bba8c86",
          },
        ]}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: enchantedWaters,
          title: "enchanted waters",
          showTitle: true,
          universalBookLink:
            "https://storyoriginapp.com/universalbooklinks/18c7e27c-8e2c-11eb-90bf-f709027da5c0",
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
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/18c7e27c-8e2c-11eb-90bf-f709027da5c0",
          },
          {
            title: "enchanted forests",
            coverSrc: enchantedForests,
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/c3045708-b594-11ec-a01d-2f0fad4b0613",
          },
        ]}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: onceUponAName,
          title: "Once Upon a Name",
          showTitle: true,
          universalBookLink:
            "https://storyoriginapp.com/universalbooklinks/529312f2-01e9-11ec-a12d-c36c379705b7",
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
          universalBookLink:
            "https://storyoriginapp.com/universalbooklinks/3932e298-ed47-11ec-b7b6-fb74830476e0",
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
          universalBookLink:
            "https://storyoriginapp.com/universalbooklinks/1851b926-3314-11eb-96f7-a7d124477774",
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
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/1851b926-3314-11eb-96f7-a7d124477774",
          },
          {
            title: "nettles in the snow",
            coverSrc: nettlesInTheSnow,
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/6d5f08f8-3c9f-11eb-ba2e-a35ca568a51d",
          },
          {
            title: "secrets in the snow",
            coverSrc: secretsInTheSnow,
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/bbb1875a-8e2b-11eb-82cf-b35b81295f4a",
          },
          {
            title: "princess in the snow",
            coverSrc: princessInTheSnow,
            universalBookLink:
              "https://storyoriginapp.com/universalbooklinks/df7e9d30-8e2b-11eb-aa59-574719e7870e",
          },
        ]}
        showDivider
      />
      <Series
        spotlightedBook={{
          coverSrc: theFoxAndTheTrain,
          title: "the fox and the train",
          showTitle: false,
          universalBookLink:
            "https://storyoriginapp.com/universalbooklinks/8a715e44-1eb6-11ea-ac8d-a7e9588ab05d",
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
