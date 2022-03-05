import { KeyAndValue } from "../../types/keyAndValue";

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 * 
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 * 
 * @param args 
 * @returns 
 */
export const fromPairs = (args: KeyAndValue[]): Record<string, unknown> => {
  const fromPairsResult: Record<string, unknown> = {};

  args.map(array => {
    fromPairsResult[array[0]] = array[1];
  });

  console.log(fromPairsResult);
  return fromPairsResult;
};