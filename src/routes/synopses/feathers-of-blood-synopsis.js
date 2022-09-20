import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../../hooks";
import { Series, Underlay } from "../components";
import { Link } from "../../components";
import feathersOfBlood from "../../assets/images/covers/feathers-of-blood-50.jpg";

const useMuiStyles = makeStyles((theme) => ({
  initialPadding: {
    height: theme.spacing(5),
  },
}));

export default function FeathersOfBloodSynopsis() {
  const classes = useStyles(useMuiStyles);

  return (
    <Underlay>
      <div className={classes.initialPadding} />
      <Series
        spotlightedBook={{
          coverSrc: feathersOfBlood,
          title: "feathers of blood",
          showTitle: true,
          universalBookLink:
            "https://storyoriginapp.com/universalbooklinks/f9375808-8e2a-11eb-81ee-d7f4d46dc19f",
        }}
        seriesOverview={{
          title: "Synopsis",
          paragraphs: [
            "The third book in the Kingdom of Birds and Beasts trilogy, Kingdom of Feathers, is coming out on the 22nd April 2022!",
            "Has it been a while since you read Feathers of Blood? If so, here is a handy recap of the events of book two!",
            "Please don’t read any further if you are yet to read both Feathers of Snow and Feathers of Blood, as this synopsis contains spoilers for both books.",
            "*",
            "Brianna has been cast out of Stonekeep into the winter wilderness of the Borderlands by Jian and Queen Fei when she revealed that she was not the true Princess Elyanna. Elyanna was told she had been executed quietly.",
            "The wedding between the real Princess Elyanna and Jian is set to go ahead to seal the alliance between the Borderlands and Sybera.",
            "Brianna and her two guards, Hai Rong and Jeremiah, travel north following a whispered voice calling Brianna’s name, which only she can hear. They shelter from a storm in an inn run by an innkeeper named Ju.",
            "The next day, they discover the bodies of soldiers on the road, torn apart as if by enormous beasts. They aim to ride back to the inn as fast as they can when they hear the attack calls of Spirit-Beasts: loud screams in their minds.",
            "They are attacked by two Spirit-Birds: a raven (Kaw’mara) and an owl. And a human of the Old Blood (Ravni). In the fight, Brianna loses her sword in the snow and her horse is killed. Just as Ravni is about to capture Brianna, she is rescued by a giant white eagle.",
            "The eagle has no iridescent symbols on his feathers, which indicates that he has not been corrupted by drawing in the Old Magic. Brianna didn’t realize there are any Spirit-Beasts who haven’t gone mad, though she still struggles to trust him. He takes her to his cave high in the Sal’hadar Mountains to recover.",
            "Bua’ma’mi says Kaw’mara and Ravni work for Jala’ban, who is trying to capture Brianna, but he doesn’t know why. He suspects it’s for the same reason he captured Elyanna before leaving her in Stonekeep.",
            "Bua’la’mi works closely with another Spirit-Beast, a crimson starling called Cara’karami. Both say they are part of the tribeless, a group of Spirit-Beasts in the west who chose to leave behind their tribes and not draw in the Old Magic.",
            "Bua’la’mi and Brianna form an unlikely friendship where he explains the lore and politics of the lands of the Spirit-Beasts and trains her to fight Nameless, creatures who are made when animals or humans who are only part Old Blood try to draw in the Old Magic. As they don’t have a full Spirit, the magic distorts them, makes them completely mad and violent, and eventually kills them. There have recently been rising numbers of Nameless in the Borderlands terrorizing villages, part of Jala’ban’s plans to cause fear and disorder. Kaw’mara and Ravni are the main instigators.",
            "Bua’la’mi teaches Brianna about the Great Trees: four giant trees, one for each tribe, that concentrate the Old Magic and so let the lands north of the Border flourish. They can heal those around them and make the plants grow stronger.",
            "Bua’la’mi also challenges Brianna to talk about what happened when she was being mistreated by Elyanna, and she starts to process some of her past trauma. He urges her to start making decisions for herself and become confident in her ability to fight. He gifts her with a Borderlander dagger he found years ago, since she is missing her sword.",
            "Bua’la’mi declares his intention to bond Brianna, which happens naturally when a human of the Old Blood and a Spirit-Beast spend time together and get to know one another. It allows them to talk mentally over longer distances, feel some of each other’s emotions, and strengthens your Spirit. Bonding will give Bua’la’mi status as so far, there are no uncorrupted humans north of the border, so none of the tribeless have been able to bond a human.",
            "Bua’la’mi returns Brianna to the inn where she finds Jeremiah and Hai Rong are injured but healing and safe. Over the next few days, she spends the nights there in the small room they have at the inn, and the days training with Bua’la’mi and flying around the mountains. Together they track down any Nameless endangering the villagers.",
            "One such Nameless attacks a group of Borderlander soldiers, and Brianna recognizes Jian. She and Bua’la’mi help kill it without being noticed, but both are injured in the process. Brianna is confused why Jian isn’t at Stonekeep for his wedding to Elyanna, but doesn’t want to have to talk to him again as it is too painful. She hopes she will eventually stop being in love with him in time if she stops thinking about him.",
            "Bua’la’mi leaves Brianna at the inn before a storm hits. They both agree to spend time resting to heal from their injuries, and Bua’la’mi returns to his cave. After the storm is fully raging, Jian and his men arrive at the inn and are snowed in with Brianna and her guards.",
            "Brianna and Jian struggle to have a civil conversation whilst they are both so hurt by the other, yet still very much in love. However Jian is to marry Elyanna very soon.",
            "Jian said scouts found Brianna’s sword, dead horse and the dead soldiers. He was worried she had been killed or badly injured, so rode up to find her, and also stop the Spirit-Beast attacks. He delayed the wedding until the threat was over. He blamed himself for her death as he had intended her to go east to safety, not north after she was banished from Stonekeep.",
            "Jian explains Elyanna has been acting strangely and disappearing from her rooms or spending many times alone. He is worried she has somehow been taking information from his desk and giving it to Jala’ban.",
            "When the snow melts, Jian and Brianna are on civil terms again, having both apologized, though both know they can’t be together.",
            "While practicing fighting, Jian notices her dagger and says it used to belong to his sister, Princess Feng, who was killed by Spirit-Beasts in the uprising ten years ago.",
            "He asks Brianna to call Bua’la’mi to demand where he found it.",
            "Bua’la’mi requests to meet Jian alone, though doesn’t explain why to Brianna. In the meeting, Bua’la’mi betrays Jian to Kaw’mara and Ravni who take him prisoner to Jala’ban. Bua’la’mi is also taken prisoner and locked up by Jala’ban.",
            "Jala’ban sends Brianna a message saying he will kill Jian unless Brianna comes to speak with him.",
            "Brianna meets with Ravni and Kaw’mara without telling her guards of the message and flies to Jala’ban’s City of Birds north of the Border.",
            "There she agrees to swallow two seeds from the Great Trees of Thrum’ban and Tamunden in return for her and Jian’s release.",
            "She doesn’t know for certain what the seeds will do, only that Elyanna has previously swallowed them too, and that they might turn her into a Nameless. Brianna realizes that if Elyanna draws in the Old Magic, she will become a Nameless and could kill many in Stonekeep. As she has always been power hungry, this is a real risk.",
            "While being kept prisoner, Brianna tells Jian about her deepest physiological wounds from Elyanna and how she suffers from PTSD. Jian accepts this part of her and they kiss even though they know there is little hope for their relationship.",
            "Jala’ban sets Jian and Brianna free, but leaves them in the lands of the Spirit-Beasts without mounts or supplies. Not far from the City of Birds, they are attacked by many Nameless.",
            "Something cracks within Brianna and she becomes a better fighter, but not strong enough, and Jian is badly injured. She cries for help and is surprised when Bua’la’mi answers along with seven other Spirit-Birds all chanting her name. They say her Spirit has become bright.",
            "Bua’la’mi now shows signs of corruption of the Old Magic: iridescent symbols, and the blue afterimage of his soul trying to escape. He said he needed to draw on it in order to escape to rescue Brianna.",
            "Jian is barely conscious and Brianna pulls him onto Bua’la’mi, and they make their escape back to the inn, accompanied by the seven corrupted Spirit-Birds who are now mysteriously bonded to Brianna.",
            "On the flight back Bua’la’mi apologizes for betraying Jian and said he did it because he believed it would persuade Jala’ban to leave Brianna alone. He also didn’t want Jian to take Brianna away from him as he knew she loved him and their love was doomed.",
            "Bua’la’mi was given Princess Feng’s dagger by Jala’ban as a reminder of what Bua’la’mi did in the last war when he followed Jala’ban. That war had made Bua’la’mi disgusted at himself, and he had sworn never to draw on the Old Magic again. He had used the dagger via Brianna to get to Jian.",
            "Bua’la’mi leaves to isolate himself so he can wean himself off the Old Magic.",
            "Brianna and Jian are both badly injured, and the soldiers at the inn have already sent news of Jian’s capture to Stonekeep. Soon the King and his healer arrive at the inn to care for Jian.",
            "Jian and the King decide they must stop the threat of Elyanna since she is clearly working with Jala’ban and is too dangerous to leave alone since she has swallowed the seeds.",
            "Jian persuades his father to let Brianna come back to Stonekeep with them so that she can help capture Elyanna with her Spirit-Birds.",
            "The King agrees but wants Jian and Brianna to have as little to do with each other as possible. Though he no longer intends to marry Jian to Elyanna, he wants a more suitable match than Brianna, who has no connections.",
            "When they arrive in Stonekeep, however, Elyanna (and her ever-present falcon) corners Brianna alone with the King. She is furious that Elyanna isn’t dead. Realizing Jian and the King are now against her, she kills the King and tries to kill Brianna too.",
            "During the sword fight, Elyanna starts to draw on the Old Magic, becoming stronger and stronger. She injures Brianna with a deep wound to her belly and licks her blood from where it flicks across her face.",
            "Elyanna collapses and suddenly a Great Trees bursts from her body and grows within the castle of Stonekeep.",
            "Jian rescues Brianna and takes her to safety, despite having a broken leg from the fight with the Nameless.",
            "When she next wakes, Jian is by her side. He declares his love and his intentions to marry Brianna. Brianna agrees.",
            "Jian tells his mother, Queen Fei that he wishes to marry Brianna and that she is crucial to defend the Borderlands. Queen Fei is unhappy with this plan, as she believes it is not in the Borderlands interests to choose Brianna as Queen. It will enrage Sybera to replace Elyanna for her maid.",
            "Queen Fei abdicates responsibility and hands the rule of the country over to Jian.",
            [
              "The story continues in ",
              <Link
                href="https://storyoriginapp.com/universalbooklinks/653c193c-852c-11ec-bbb9-8f1c86eb3df8"
                target="_blank"
                rel="noreferrer"
              >
                Kingdom of Feathers
              </Link>,
            ],
          ],
        }}
      />
    </Underlay>
  );
}
