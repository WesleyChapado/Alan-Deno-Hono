import { Context } from "hono";
import { Innertube } from 'https://deno.land/x/youtubei/deno.ts';

const innertube = await Innertube.create();

export const getVideo = async (c: Context) => {
  const videoInfo = await innertube.getInfo('AnrMS6sulFk');
  return c.json({ info: videoInfo.basic_info }, 200);
};