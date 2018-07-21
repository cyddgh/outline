// @flow
import { Team } from '../models';

function present(ctx: Object, team: Team) {
  ctx.cache.set(team.id, team);

  return {
    id: team.id,
    name: team.name,
    avatarUrl:
      team.avatarUrl || (team.slackData ? team.slackData.image_88 : null),
    slackConnected: !!team.slackId,
    googleConnected: !!team.googleId,
    require2FA: team.require2FA,
    requireNotGuest: team.requireNotGuest,
  };
}

export default present;
