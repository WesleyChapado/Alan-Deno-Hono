import { Context } from "hono";
import { Innertube } from 'https://deno.land/x/youtubei/deno.ts';
import { cryptoRandomString } from "https://deno.land/x/crypto_random_string@1.0.0/mod.ts"

const innertube = await Innertube.create();

export const downloadAudio = async (c: Context) => {
  const videoInfo = await innertube.getInfo('AnrMS6sulFk');

  const stream = await innertube.download('AnrMS6sulFk', {
    type: 'audio'
  });
  const hash = cryptoRandomString({ length: 15 });
  const file = await Deno.open(`src/app/media/audio/audio_${hash}.mp3`, { write: true, create: true });
  await stream.pipeTo(file.writable);

  return c.json({ info: videoInfo.basic_info, message: 'Audio downloaded successfully' }, 200);
};