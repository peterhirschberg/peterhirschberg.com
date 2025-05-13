<template>
  <v-container fluid class="VectorTanksView content-page raster">
    <page-title title='"Vector Tanks" & "Vector Tanks: Extreme!"' icon="mdi-tank"></page-title>
    <img :src="require('@/assets/images/pages/vectortanks/vectortanks-hero.png')" width="400px" align="left">
    <img :src="require('@/assets/images/pages/vectortanks/tank1small.png')" align="right" style="clear:both;">
    <img :src="require('@/assets/images/pages/vectortanks/tank2small.png')" align="left" style="clear:both;">
    <img :src="require('@/assets/images/pages/vectortanks/jeepsmall.png')" align="right" style="clear:both;">
    <article>
      <p>
        Way back when Apple first opened up the iPhone for developers, I immediately decided to create games for it.
      </p>
      <p>
        After a couple experimental projects, it dawned on me that a perfect control-scheme for a touch device would
        be two vertical sliders on either side of a landscape oriented screen, which would keep the player's fingers
        out of the way.
      </p>
      <p>
        This thought process led to me then think of Battlezone, which uses two control sticks
        that the player pushes back and forth to control the player's tank. So, I decided to do something along the
        lines of Battlezone, but "amped-up" for today's available tech.
      </p>
      <p>
        Inspired by one of my favorite games "Geometry Wars", I added physics modeling with things 
        like the tank rocking back and forth as you drove around and made turns, etc., lots of particle effects,
        more detailed tanks (but keeping the majestic simplicity set forth by the original game), Jeeps instead of
        UFOs, land mines, and a radical and intense color palette.
      </p>
      <p>
        I also managed to "fake" the lovely phosphor glow that vector games inherently have.
      </p>
      <p>
        I intentionally did not use any 3rd party libraries - only using OpenGL to physically draw on the screen.
        Even the 3D projection code was hand-spun.
      </p>
      <p>
        I picked up a distributor (Chillingo) and the game hit the market in the early days of the App Store. It wasn't
        quite "Angry Birds" but it did pretty well!
      </p>
      <p>
        I made a profit-sharing deal with a band called <a href="https://www.reverbnation.com/urbansnakemusic" target="_blank">Urbansnake</a>
        who had an awesome song on iTunes literally called "Blow Shit Up" (lol)
        which they happily rerecorded for me as "Blow It Up" and it would play on a loop in the background during the game.
      </p>
      <p>
        Encouraged by its success I decided I needed to take even more cues from "Geometry Wars" and amp things up
        several more levels into "Extreme" territory, so I started working on Vector Tanks EXTREME. I added powerups,
        which included multiple weapon types (rapid fire machine guns, a rail gun, heat-seeking missiles, even a nuke!), "shields" that would deplete as you got hit,
        lightning effects, helicopters, and the ability for many, MANY tanks and projectiles to be on the battleground at the same time. It was pure insanity and I loved it.
      </p>
      <p>
        Then, inpired by one of my favorite iPhone games "MiniGore" I decided that Vector Tanks EXTREME needed some cool voiceovers
        to drive up the intensity. I kept thinking in my head that it should sound like "Duke Nukem", but I originally hired a talented voiceover artist
        named Jeff Staub who I previously had recorded "bumpers" for my Retro Arcade Radio station. After hearing what the game sounded like
        with Jeff's vocals in there I was super psyched and decided to actually reach out to Jon St John, the voiceovers artist who
        did the voice of Duke Nukem. Jon absolutely killed the lines I gave him and I couldn't stop laughing over how funny and over the top the entire voiceover idea was.
        It matched the tone I was going for perfectly. I ended up keeping both sets of voiceovers in the game, with the player being able to choose.
      </p>
      <p>
        My friends even helped me out programming EXTREME, adding stereo sound, global leaderboards, and the beginnings of network play! HUGE "thank you" to
        those who helped - you know who you are!
      </p>
      <p>
        Vector Tanks EXTREME was an even bigger success than the original game. Then, bad things happened in my life...
      </p>
      <p>
        Fast forward a year or so and sales had slumped. I was unable to maintain the game anymore, even losing the website that hosted the leaderboard servers.
        I made a decision to give the game to a friend who could take things over. Unfortunately shortly after that Atari's lawyers, who didn't seem to exist
        before when I was trying to make a licensing deal with them to do an official Battlezone game, took the game down off the App Store.
      </p>
      <p>
        The game made an under-the-radar return to the App Store at some point and is still there as of this writing. If you search for Vector Tanks you will find it even though it's not called that anymore.
        To be honest I had nothing at all to do with the latest version, but it's nice to know that the original game's legacy is still somewhat being preserved.
      </p>
      <p>
        RIP Vector Tanks.
      </p>
    </article>

    <br><br>

    <article class="small quote" style="clear: both;">
      <p>
        <strong>Better than the original - and I should know!</strong>
      </p>
      <p>
        As the designer/programmer of the original 1980's arcade game Battlezone,
        I believe that I have a unique perspective. Peter Hirschberg has done a
        remarkable job. He has kept all the nostalgic impact and unique look and
        feel of the original BattleZone game, but improved it in so many ways.
        It would have been all too easy to lose the "guts" of what made BattleZone
        an early hit, but Peter pulled this off brilliantly. I could go on with even
        more effusive praise for this game, but I'd rather get back to playing it!
        Enjoy!
      </p>
      <p>
        = Ed Rotberg =        
      </p>
    </article>

    <br><br>

    <h3 class="pagesubtitle" style="clear: both;">Screenshots</h3>
    <lightbox-slides :slides="slides1" style="clear: both;"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Reviews / Articles</h3>
    <lightbox-slides :slides="slides2" style="clear: both;"></lightbox-slides>

    <h3 class="pagesubtitle" style="clear: both;">Jon St. John (Voiceover Artist)</h3>
    <lightbox-slides :slides="slides3" style="clear: both;"></lightbox-slides>

    <h3 class="pagesubtitle">Vector Tanks EXTREME! Official Trailer</h3>
    <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SMoyoowJhuc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </center>

    <br><br><br><br><br><br><br><br>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import LightboxSlides from '@/components/LightboxSlides.vue'

export default {
  name: 'VectorTanksView',
  components: { PageTitle, LightboxSlides },
  data() {
    return {
      slides1: [
        {
          image: require('@/assets/images/pages/vectortanks/poster.jpg')
        },
        {
          image: require('@/assets/images/pages/vectortanks/445059.jpg')
        },
        {
          image: require('@/assets/images/pages/vectortanks/vector-tanks-extreme-screenshot.jpg')
        },
        {
          image: require('@/assets/images/pages/vectortanks/vector-tanks-extreme-screenshot (1).jpg')
        },
        {
          image: require('@/assets/images/pages/vectortanks/vector-tanks-extreme-screenshot (2).jpg')
        },
        {
          image: require('@/assets/images/pages/vectortanks/vector-tanks-extreme-screenshot (3).jpg')
        }
      ],
      slides2: [
        {
          text: "Vector Tanks: Ed Rotberg Review",
          image: require('@/assets/images/pages/vectortanks/ed rotberg review.png')
        },
        {
          text: "Vector Tanks EXTREME!: GamePro Review",
          image: require('@/assets/images/pages/vectortanks/GamePro review.png')
        },
        {
          text: "Vector Tanks: TouchArcade Pre-review",
          image: require('@/assets/images/pages/vectortanks/toucharcade_review1.png')
        },
        {
          text: "Vector Tanks EXTREME!: TouchArcade Review",
          image: require('@/assets/images/pages/vectortanks/toucharcade_review2.png')
        },
        {
          text: "Vector Tanks EXTREME!: TouchArcade Review (part 1)",
          image: require('@/assets/images/pages/vectortanks/toucharcade_review3_part1.png')
        },
        {
          text: "Vector Tanks EXTREME!: TouchArcade Review (part 2)",
          image: require('@/assets/images/pages/vectortanks/toucharcade_review3_part2.png')
        },
        {
          text: "TouchArcade - \"Atari Pulls the Plug on Vector Tanks and Vector Tanks Extreme\"",
          image: require('@/assets/images/pages/vectortanks/toucharcade_atari.png')
        }
      ],
      slides3: [
        {
          text: 'Jon St. John plugging Vector Tanks. Jon did the voice of Duke Nukem, and I was thrilled to have him do the voiceover work for Vector Tanks EXTREME!',
          image: require('@/assets/images/pages/vectortanks/jon1.jpg')
        },
        {
          text: 'Jon St. John (and me) plugging Vector Tanks. Jon did the voice of Duke Nukem, and I was thrilled to have him do the voiceover work for Vector Tanks EXTREME!',
          image: require('@/assets/images/pages/vectortanks/jon2.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.small {
  font-size: 12px;
}
.quote {
  background-color: black;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #404040;
}
</style>
