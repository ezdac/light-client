import * as t from 'io-ts';

/**
 * A Raiden configuration object with required parameters and
 * optional parameters from [[PartialRaidenConfig]].
 *
 * - matrixServerLookup - Matrix server URL to fetch existing matrix servers from.
 *      After intializing a [[Raiden]] instance, the matrix server can't be changed later on.
 * - revealTimeout - Timeout for secrets to be revealed
 * - settleTimeout - Timeout for channels to be settled
 * - matrixServer - Specify a matrix server to use.
 */
export const RaidenConfig = t.readonly(
  t.intersection([
    t.type({
      matrixServerLookup: t.string,
      revealTimeout: t.number,
      settleTimeout: t.number,
      pfs: t.union([t.string, t.null]),
    }),
    t.partial({
      matrixServer: t.string,
    }),
  ]),
);
export interface RaidenConfig extends t.TypeOf<typeof RaidenConfig> {}

export const defaultConfig: {
  [network: string]: Partial<RaidenConfig>;
  default: RaidenConfig;
} = {
  goerli: {
    pfs: 'https://pfs-goerli.services-dev.raiden.network',
  },
  default: {
    matrixServerLookup:
      'https://raw.githubusercontent.com/raiden-network/raiden-transport/master/known_servers.test.yaml',
    settleTimeout: 500,
    revealTimeout: 50,
    pfs: null,
  },
};
