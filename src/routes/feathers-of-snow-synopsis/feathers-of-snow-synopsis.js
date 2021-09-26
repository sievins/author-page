import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../../hooks";
import Underlay from "../underlay";
import { Series } from "../components";
import feathersOfSnow from "../../assets/images/covers/feathers-of-snow-50.jpg";

const useMuiStyles = makeStyles((theme) => ({
  initialPadding: {
    height: theme.spacing(5),
  },
}));

export default function FeathersOfSnowSynopsis() {
  const classes = useStyles(useMuiStyles);

  return (
    <Underlay>
      <div className={classes.initialPadding} />
      <Series
        spotlightedBook={{
          coverSrc: feathersOfSnow,
          title: "feathers of snow",
          showTitle: true,
          universalBookLink:
            "https://storyoriginapp.com/universalbooklinks/40987692-2912-11eb-8eba-9744d8f5a192",
        }}
        seriesOverview={{
          title: "Synopsis",
          paragraphs: [
            "The second book in the Kingdom of Birds and Beasts trilogy, Feathers of Blood, is coming out on the 6th October 2021!",
            "Has it been a while since you read Feathers of Snow? If so, here is a handy recap of the events of book one!",
            "Please don’t read any further if you are yet to read Feathers of Snow, as this synopsis contains spoilers.",
            "Brianna is lady-in-waiting to the vain and cruel Princess Elyanna in the country of Sybera. She has been serving her since she was six years old.",
            "When they were twelve, Elyanna locked Brianna in a barrel for several hours. Since then, Brianna has suffered from nightmares, flashbacks and a habit of buckling under pressure. She also struggles to breathe in small, dark spaces. Brianna has never told anyone what happened, though Queen Geraldina knows.",
            "Princess Elyanna hears the news that she has been betrothed to Prince Jian, the second son of the Borderland King and Queen. This marriage has been arranged so that Sybera can access the Borderland’s military might to defend against the growing threat of Killamore to the south.",
            "However Princess Elyanna and her mother, Queen Geraldina, decide to send Brianna in her stead as they fear for Elyanna’s safety. The two look very similar as they both have the same ancient bloodline. They both have white hair and are tall. The blood in their veins can be traced back to the old tribe of Thurm’ban. This was a tribe of an ancient race of humans and giant birds.",
            "Queen Geraldina threatens to kill Brianna’s family by blaming them for the recent loss of life in their province due to flooding. Brianna sees no choice but to go along with the plan.",
            "Elyanna travels to the Winter Palace in Sybera where she plans to spend the rest of her days masquerading as one of her many cousins.",
            "Brianna travels to Stonekeep, the capital of the Borderlands, disguised as Princess Elyanna against her will and has only one guard stay with her, Jeremiah, who is not even a full knight. She travels with her oldest and best friend, a Spirit-Horse named Falada. Because they are bonded, she can hear him speak in her mind. The only other person he is bonded with is Elyanna.",
            "Prince Jian, her betrothed, is cold and dismissive when Brianna arrives. She finds out that he wishes to focus on the Border, a mountain range and two forts to the north that holds the Spirit-Beasts at bay. He is in charge of the troops at the Eastern Fort and has been renovating the defences. He sees Brianna as an unwelcome distraction and fears attachment due to losing his sister, Feng, in the past. He suspects he will dislike Princess Elyanna.",
            "Throughout her time in Stonekeep, Brianna hears a mysterious voice on the wind calling her true name. She has no clue who is calling her or how they know who she really is. Nobody else can hear the voice.",
            "The people of the Borderlands seem quite paranoid about attacks to Brianna, and she adopts the tradition of always carrying her sword with her. She is assigned two more guards, Hai Rong and Cai Rong, who she gets on well with.",
            "Prince Han, the Borderland Crown Prince, is attacked and killed while checking the villages are ready for winter, along with all of his men. Prince Jian and the King start to investigate to find the culprit.",
            "Brianna travels with Jian to the Border to meet Tama’ha, the Spirit-Beast who is the leader of Sal’hadar’s tribe. The Spirit-Beasts of the plains. The Borderland royal family share some of this bloodline, so they have an uneasy truce. Tama’ha suggests Han was killed by Spirit-Birds and that Brianna would be the best person to discover what had happened, since she has some of Thum’ban’s blood.",
            "Brianna and Jian start to have feelings for one another as they realize they can work as a team. Jian is taken aback by Brianna’s resilience and kind heart. Brianna finds Jian is finally a member of the nobility she can trust.",
            "Elyanna’s soldiers are found dead near Stonekeep. There is no reason they should be in the Borderlands, and not still in Sybera, since Elyanna was meant to stay at the Winter Palace.",
            "Falada is killed mysteriously. Brianna suspects Elyanna, and worries she will reveal her true identity, which would mean Brianna is killed for treason. Brianna tries to find her, but with no success. Elyanna appears the night of the mid winter ball and challenges Brianna to a fight.",
            "Brianna is tired of lying and tells Jian the truth, who banishes her from Stonekeep with nothing but her guards, food and money.",
            "Elyanna is told that Brianna has been killed for stealing her position and pretending to be the princess.",
            "Brianna is heart broken and leaves with Hai Rong and Jeremiah, following the voice on the wind that calls her name.",
            [
              "The story continues in Feathers of Blood: ",
              <Link
                href="https://www.amazon.com/dp/B08VX2YQFF/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.amazon.com/dp/B08VX2YQFF/
              </Link>,
            ],
          ],
        }}
      />
    </Underlay>
  );
}
