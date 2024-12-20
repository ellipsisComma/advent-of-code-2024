// Advent of Code 2024 day 4

const input = `SXMAXXMSSSMMXAMXAMXMMXXXAXMAAMAXXAMXMMAMXMASXMASXXSMMMAXXAMXAMASXMSMMMAASMSMMMXMASAXMAXAMXSAXXMXXMXSXMXAMXMXSSMXAMXSXMMSMMSMSASXXMXMMMXMMMMM
SAMXSMXMAAAASMSMXSXAXASMSSMSSSXSSSMMSASMXMAMMXMASXMMXSAMMSMAMSAMAMXSAXMMXAAXAMAXSAMXMSXSXMXSAAXAXSMMAMSMSXSASAAMSSMMAMXXAAXXAAAMASMMASAMAAAX
MAMMAXSMSMMMXAAMAMMSMASAAAXAMXAXAAAAXMAMAMMMSAMMAXXAAMASAAXXAMASXMASMMMASXMSMSXXAMXSSMAXAAAXXXMXXMAMAMAASAMXXMSMMAXSAMASMMSAMXMSAMASASASMXMS
SSMMMAXAAXSAMSMMASAAMAMMMMMMSMMMSMMMSXMSMSXXMASXMSMSMSAMXXMXMAXMXSXSXSMASAAXMAXXXXAMAMSMAMMSXSMMASXMAMMXMMMSSXMASAMMASASAAXXXAXMASAMXMAMAASM
AAXAMXMSMMMXMXAMXMXSMMXSXMAXAXXAXXXAAAMAASMMSXMMXAAXAMXAASMXXSAMXMAMAAMXMXMXMAXMMMMSMMAXMAMMMAASAMAXMXSXMXAAXASAMASAXAMXMXMMXXSSMMMXAMXMSMMA
MMSXMAAXMSMMAMAAXAAMASMMASXXXXXSSMMXSMMMSMAXSASXSMSMMSSMXSAASMMMMMAMMMSSMSXXMMSMAAMAXMMSASAAXSMMASMMMAAAAMMSSMMAXSMMXAXAMMSMSSMAMAMMSMSMXMMS
XXSASMSXXASXXMXMMMMSMMAMMMMSAMSAMXAMXXAXMMSMSAMAXXXASAMXSMMMXAAAAMMSMAMAASAMXAAXSSSXSAXAAMXAMXXMAXAAMAXMMSAMXXMXSXXSSSMMSAAASXSAMXMAXSMAMMAA
MMSMMMMMSAXMMAAXAMXMMAXMAAAMAMAASASMSSMXSAMXMAMSMXSSMMSXMAMASMMSSMMAMMSMMMMSSSXMMMMAMMXMSMSSSMSMASXMSSSMASAXXSAMXMAXXAXXAMMXMXSXSSMMSAMXMMMM
AMSXXAAMMSMAAXSSXSAAXAMXMMMXSAMXXAXAMASAMXMSSMXXXMMXSXAMMAMMMAAAAASAMAAAMSMAAMXSAAMSMAAXAMMXAAMXMAAXAMAMASMSAXXMAMAMSMMXXXMASXXMAXAMXMMMMASM
SXSASMSXAXMSSXMAXSMSMAXMAXXSMMXSMMMMSMMXSAXXAMAMSMSAMXMSSMSSSMMMSMMAMSMSASMMMMASMMSAMSSSMSSSMMMASMSMXMXMMSASMMMSMSAASXSMMASASMMSMXSMSMAMSASA
MAXMSAXMMMMAXAMSMMAXXAMSMSMSASAMXAAAAMXMMMXXAMXXXAAASMMAAAAAMSMMXMMSMMAMMMMSAMMSXMAMXAAXAAAXXAMXSAAXAMSSMMXXAAASAXMXXAAASAMAXMAAAXMAMSAMMASM
MXMXMMMXMAMMXAMXAMMMMXXAAAAXAMXSSMSSXXAAAMAMSXSMMSMSAXMSMMMSMSXMASMXXMAMXAAXMXXXAMMXMMSMMMSMSXXSMXMSMXAAXXMSMMXMAMMSXSSXMXSSSMSXMAMAMSMXMMXX
MMXXSAMASXSSXSXSXMMAMASMSMSMXMXXAAMAMMSSMMSSMAAXAXMMXXXAMXAMMSASAMXMMXSXSMSSSSSSMMXAMXAMAXAAMXXSASXSMMSSMAMAAMMMXMAAMXAMXXXAMXMMSSSMMXSXAXMM
XXMASASXSAMXXMAXXMMAMMMAAAAXAASMMMMAMXXAAXMAMSMMMMXAAXMMMMMSASAMXSAXXAMAMXXAAAXAAMSMMSASMSSSSMAMAMAXMAAAXMSMXSAMXMXSSMAMASMASMXMAXAASASMMMAM
SMAAMAMXSMMMMMAMSXSMSAMXMSMSXSAAXAMAXAXMMMXAMXXXSMMXSXSAXSAMAMSMASAMAMSAMXMMMMSSMMAAMSMMAAMMXAAMAMXMMXSSMMXAASAMMMMXAMMMAXMXAXAMMSMMMXXASASA
AASMSSSXXXAAMMMSMAAASAMXMAMAMXMXSSSSSXMAASXMXMXMXASXMAMXSMAMXMXMASAAXMAMXAAXAXAMXSMSMSAMMMXMMXMSMMSASAAMXMMMMMASXAMSSMMMSSXMASMMXAMASXSMMAMX
MMXMAMXAXSSSSXMAMXAAMMSXMXMMAXMMXMAXAASXMSASXSAAXMMAMXMMMXAMASXMXSXSSXASXSSSMMMSAXAMASXMMSSMMSAXAMXAMMSMMMXAASMMMAXAMXSAAMAXXSXSXMMMSAAAMAMX
XMMMXSMSMAAAMXSXSSMSMXMAMXSSMAMAAMMMSMMAMMAMASXMXASMMMMAASXMXXAMMMMAMAXXXMAMMSAMAMXMAMASAAAASMXMASMXMXAXXSSMMSAASMMXXAMMSSMMXMASASXMMXMMMASM
AMASMMAMMMMMMMMAMAAAXAMAMAMAXAASMMSAMXSAMMAMXMASAMXASXSMMAAMSSMMAMSAMXMSAMXMXMMSMMSMMSAMMXMMMAXMASXXMSMSXMASAXMMMAMSMAXAMXMAMXASAMAXAMXAXXXA
XAMXAMAMAMASAMMAMMMMSASMMXSSSMXAMXMMSASXSSSXSAMAAXAAXAAXSMSMAAMSMMMXMASXMMXMAXXMXAXAXMASASXXSXSMASMSAAAMMMMMXMAAXAASXXMXSAXMAXXXASAMXSSMSMSM
MXXSXMXSXSASASXMMSAMMXAAXAMXAMSMSMSXMAMAMAMMSAMASXSSMAMMXXMMSXMAAAMMSMSASAAMMMMSMMSMMSXMASAASAXMXSASMMAMSXSAMXMMSMASASASMMSXSSSSXMAMMMMMAAAX
ASMMXSAMXMASAMMMAXAXMXSXMXMSAMAAMAMXMAMMMAMASAMAXAMXAAAMXSMAXASXMXMAAAXAMSXMAASAAAMAAMXMAMMMMAMMMMAMAXMAMAMAMAAAXMAMAAMXAASMAAAXXSAMAXAMMXMX
MXAAASXMAMMMMAAMMMSMMAMSMAMMMMMAMAMXXMSXMSMAXXMAXAMAXMAXAXMASXMSAAMSMSMAMAMMSMSASAMMSSXMSSMAXMMAMMSMSMXAMMMAMSMMXXSMSMMSMMSAMMMMMSXSSXSMXSSM
XSMMXSXSASMMSSXSXAMSMXSAMASAMSXSSMMSAMMMMXMMMXMMXAMSSSXMSSMMXXAMMMMAAXMAMAMAMASXMAXAXXXMAAMXMASXMXMAXMMASMMXXMASMXXAMXMAXXXXMMMSXMASXMMSMAXA
XXXMAMASASXAXMAMMMMAMMXMSAXASAAAXAASAMAMXSASMSASXSXMAMAXMAMXAMSMMAMMXMAMSAXXSAMMSXMMSXSMSSMSMAAAASMMMSMASXSAASAMAAMMMSSMSAMXSXMXAMMSAMAAMMMS
SASMASAMXSMSMAASMXSAMXAXMXSMMMMMMMMSAMXSAMSAAMASMMAMSMMXSAMMMXAAMAMMXMXXMMSMMASXMAMMMAXAAAAMMAMXMSAAAAMXMAXMMMXAMXSAAMAMXXSAMXXSXMXMAMSXXMAM
AAXSASXSXXAAXSMSXAMXSXMMAAMAAXAXAMAMASAMXMMMXMAMMSAMAAMMSXMAMXXMMSAMAXASXAAASAMAXXMAMSMSMMSMMASAAXMMSMSAMXMXXASXSMSMMSAMMXMAMXASMMASAMASMMSX
MMMMMSAMMMMMXMAXMMMXMMSMMASXMSMSXMASXMASMSSMAMMSASAMMXMAMMSASXSXAXASXSAMMSMMMMSSMSSMMXAMSMMASASMSMXMAMXAXAMXMMSAAASXMSAXSAXMSSMXASAXAXAXMAMS
XASAAMAMMAMSXMAMAASMSAXAMASXMAMSMMAXASXMAAASMSXMMMXMASMMXAMAMMAMXSAMXMXMAMSMSMAMXAAAXMAMMXSMMMSAMXSMMMMMSSSXMAMXMMMAXSXMXXSXXAXMXMMSSMMSMAMS
SXSAMSXMSSSMAXSSSXSAMMSSMAXASMMSAMSSMMMMMSXMXAXMSSMMMAAXMXMXMSAMMMAAXMAMSXAXAMASMSSMMSXMAASAXXMAMMXAAAXMAMXXMASAXAXMMMMSMMMXMXMXAAAAAMAXMMXX
SMMXXSAMXMAMXMMAXAMXMXMAMAXMMSAMMMAAXMAAAMASMMMAAXAAXMAMSMSSMSASXSSMXSMSMXMMXMAXXMAMXXAMMMSAMMXMXMSSMMMAASXXSXXMXXSMSMAAAMASMSMSMSXMASMXXSSM
MAAMMMASASAMXMMMMXMAXXSMSSSMAMSMXMSSMASMMSAMAXMMSSSMSMMAXAXMAXAMXMASAMXAXAMSAMAMSSMMXSMMSMXAMSAMAXMAMSASMSMMMSMMSMSAAMMSSMAMMAAAAAAXAAAXAAAA
SMMXASMMAMXXAXAXMXSMSXSXAAAMAMMSMXAAXAAAXMXSSXAAAAAAXASMMMMSSMMMAXSMSSMMSMAAAMAMXAAXMASASASMMXASXSSSMMMMAMXAASXMAAMSMMXMXMMSSMSMSMXMASMMMAMS
SASXXSAMMMMSMSXSXAAXMAMMMXMMMMMAMMMSMMXXMSXMMASMMSMXMAMXAAAAXAASMSXAAXAXXMAXXSXSXSXMAMMMSMXSASXMAXMAAAXMAMXMXXAMMSMMMSAMMSMAAMMMXMAMXMXMMAXX
SAMXXXAMAAXAMSMMMSSMMAMAAXMXMASAMSAMXSMSAXMAAXMAMXXMASMSMMMSXMMAXSMMMSSMXMSSMSAMAXASXSAXXXASXMASMMSSMMMSAMASMSSMXXMAASASAAMSXMMMAXMSMXXMAXSM
MAMMASXSSXSXXXAAMMAMSASMSMMASAMAAMXSMAAMMMSSMSSXMXXMAMMASAXMXSMSMSSMAAAMXAAAMXAXMAMSASXSXMAXAMXMSAMXMAXXMAMXAAAMMSXMXSXMMSMMXAASMMSAXMMSSXAM
SAMMAAMAMAAXSSSMMMAMAAMAAASMMSSMMMAXAMXMXAAXMAMAASXMAMSASXSMMSAAXMMSMSAMMAMXMSMMSSMMMMMMAMSSSMSAMXSASXSASMXMMMXAAXASAMASXMAMSSMXXMXAXXAAAMXM
SXXMMXMAMMMMMAMMXSMMMMMMMXMSAAXXAMSSSXXSXMASXASMMAAMXMMASAXMAMSMMMAXMMAXSXSSXMXAAMXMAAAMXMAAAMMMAXXXMAMAXMASMSSSSSMMASAMAMXMMASXAMMSMMMMSASX
SXXXMXMXSAAAMAMAXSAAAASAMSAMMMMMXSMAMXMAXMAMMMSASMSMXXMXMMMMAXMMMMAXXMSMXAXXAMMMMSASXSSSXSMSAMAMAMMAMXMMMMXMAMAMXAXMMMMSSMMMSAMXAMAMAXSAXMMM
SXMASAMMSXSSSSSXMSMMMMMASMXMSASMSSMAMMAMMMASAMXAMAAXMXMAMXAMXXMAAXXSSXMMMMMSSMMAXSXSAAAXAXMXMXAMAXSASXSSSMSMMMMMMAMAAAXXXAMXMMMSSMASAMSAMXAM
XAMAAASXMAMAAAAXXMSMXSMMMAMXSASXAXXAXAMXXSASXSMSMSMMMMSAMSXSSSSSMSAAAMAAMSXMAMMMXSAMMMXMMMMASMSSSXMASAAAAAXXXAAMSXMSXXMAMXMAMSAMXSASXMMAMSSS
MXMXXSMAMSMMMMMMSMAMAMASMSMAMAMMMSSMXSAMXMASAMAAAAMAAMXSMSAMAAAAAAMMMSSXXSMMAMASAMAMAMAXMAMXMSAAMXMXMMMSMSMMSSSMSAAXASMSMSMAAMAXAMXSAMMMMXAX
MAXXSAMSMMASXMSAMXAMAMMMAAMXMAMMXMASAXAMAMAMAMSMSMSSXXAMXMAMMMMMMMSXXAMMMSASASAMXXAXASASMMSSSXMSMSSSXXMXAXXAMAAAMMMMAMAASAMXXSSMSSMSXMASMAMS
SSSMAAAXASAMAAMSXSSSMSSMXMSMSSMSASXMMSMSMXAMXMXAAAXAAMSMASXMAMXSSXMXMAMAAMAMXMASASXSMSMSAMAMXAXMASASAMMMMMASMSMMMAAMAMSMSMSSMAAXMAXMASXSAMXA
SAAASMMMXMAMMXMXMAMAMXAAASAMXAASAMXAAMXSASXSMAMSMSMMMMXAXMAXXSAMMAXAXSSMSSSSXSAMXXXAXMAXAMASMSMMXMAMXAAAMAXAXAMSSSSSXMXAMXAAMSMMSMMSXMAMMSSM
MAMMXMMSMMXXXMXXMMMSMSMMMSASMMMMAXSXMASMAXXAXXXXXMASAMXSAXAMSMASMMMSAMXMMAAAAMXSMSSMMMMMASXSAMMSAMXMASXXSSSSMSXAAMXMMMMSMMSXMAXMAAMMMMAMSAXX
MMXMXXAAAXMAMSMMMAAXMSAAASMMMMASXMAMXXXMAMSXMSMSASASASAMSMSSMAAAAXAMMASMMMMMMMMMAMAAAAXSXMXMXMAXXSASMMSMMMAMAXMMSMAMSMAAXMMXMAMSSXMXAMASMXSS
SXASMMSSSMAAMAAAMMMSASMMMXXSASXSAAAAXMSXSMSMAAAMAMXSAMASAMXAMMMXSMSSMASAAXXSXSXSXXAMMSXSASXSXMXSAMXSAAXMAMAXMMMMAMASAMSSSXMAXSAAMAXSSSSXMXMA
MMMSAAAAMMSMSAXMXAAMAMXSAMXSASASXMXSAAMXMASMSMSMAMAMMMXMXXMAMXSAAAAXMAXMMMMMASAMASMMMXXMASAMXXMAMMMSMMSXMSMMAAXSASXMAMXXMASXSMMASMMAXXXASMSS
XAXXMMMXMXAXXMASXMXSASMXMAMMAMMMXMAXMSMMMXMXXAAXAMASXXXAMXSSMAMXAMXSMXMAAXAMAMAMAMAAMSMMAMXMAMSAASAXMASXAAAASMMMXMAXSMAMMAMXAXMXMXAMXMXSMAXM
XMSMXXXASMMSXSAXAAXMAXXMAXXMMSXMAMMSXXMASXSAMXMMMXAXMMMXSMAAMXSMMMMMAASXMSSMASAMXSXMMAAMXMMASAMMSSMXMASMSMSMXAXXXXSAMMMMSSSMMXAAAXMAXAXMMSMM
SAMXSAAXMAXXAMSSMMSMASMMSSXMASASMSAMMXMXSAMXSMMASMMXSAASMMMMMASAASAMMMMAAXASAXASASMMSSSSMSMAMXSXXMASMMXAMXXXMMSSMAMASAXAAXXAXSSMSMMSMSMXAAXM
ASMAXMASMSMMMMAXXAXMAMAAAMAMXSAMAXAXMAMAMXMMMASAXAXAMXXXXAAXMXXXMSASMSSMMSMMMSMMXXAXAAAXAAMXSAXMXMAMAAMSMMMMMXAAMXMAMMMMXXXSMMXMXXAAAAAMSMSS
MAMMSXXXMAXXAAXSMMXMMMMMMMSMMMXMXSAMSMSAMXMASXMAMSMMMSXMSMSSMMSSMSAXAXXXAAAMXAXAMMSMMMSMSMSAMMMMMMAXMXSXAAAASMSSMAMASXSSSSMMASAMSMXSSMXMAAAA
XMXMAMMXAAXSASXMAXASMSSXSAXXMAXXMXXAAMAASAMXSMASMMASAAAMAMAXAAXXAMMMSMSMSSSMSMSXSXXAAAMAMXMMXAAXMSMSMXAXMMSMSAAAXXSASAXAAAMSAMAASAMMAMSMMMAS
MXSMAMXSXMMSAXASXXXSAAAAMMMMMSMMSMMMMSSMMXSXSXAMMXAMXSSSSMASMMMMMMXAMAMAXAMAMASAMAXSMXSAXMASMSSSMAAAMXSXSXMXMMMSSMMMMXMMSMMMAXMMMAMSAMAXSSMM
MMAMXXAMASAMMMXMSAAMMMMMSSXSAAAAMAMSMAMAMXXAXMASXMMMXMMAMMAXAMASXMMSSSMSMSMAMXMAMAMMXAMMMAXXMAAAMAMASMMAMXMASAMAAASXMMSXMAXMAMSASAMXXMAXXAAA
XSSMSMASAMMSAMAAXMXMAXAXAAAMMXSMMAMAMASAMMMSMMAMAMXSXSMMMMSMSAMXAXAAXAAXAMSMSXSXMXSMAMMSMMMSMMMMMXSASAMXMASMMAMXSXMMSAAMSMMSMXMASASMXMXMSSMM
MMAAXSAMXSASASMAMMSSXSMSMMMMXAMASXSMSXSXSXAAAMMSAMXAASAMSXMAMAMSMMSSMMMMSMAXMAXAMMMXXXAAAAXAAMMSAMMXSXMXXAXXSXMAMAMASMMXAMXSXSMXMAXXAXAAXAAS
ASMMMMXSAMXSXMXMASAMASMMXSXSMASASAAASXSXSMSXSMAXMMSMMMAMXAXMSMMAAMAMAAXSASMMXMMAMAMXMMSSSXSSXMAMAMSASMSMMMXMXAMASAMMXAXSMSXMAMSAMXMSMSSSMXMS
XXASMMMMXSAMAAMSXSXMAMAXSMAXMMMAMMMMMMSAMXXMXMAMSAMXXSXMSMMMAASXSMSSXMXSASXMASMSMXSAAAAXAMXMAMMSSMMASMAAAMASXMMASAMXSXMAXXAMSMXMASMAMAAAMSMM
MSAMAMSMAMAMSSMXMXXMXSXMAMMMSXMXMXXXSAMXMAXMMMXAMXSMXAAMAMAMSMMAXAMXXSASXMXMAMAXSASMSMSXMAXXXMAAMAMMMMSSMSASAAMXSXMXAXXSSSXMAMXMAXXXXMMMMAAA
MXASXMAMXSAAMAASMSMXMAXMAMXAMXAXMASMXSXAMXSMASMMSMSMXMAMASAXXMSXSAMMMMAXSAXMAMSMMMSXMXMASMSMSMMXSAMSSMXXMMMSXMMMMMMMMMMAXMAMXAAMMSSMSMSMSSSM
MSMMMAMMMSMSXMMMXAXAAAMSSSMAMMXMASXMAMSMSAXXAMAXXAXMMXMSMSXXAMMMMAXSAMXMSXSMSMMAAXMASASXMAMAAMAXMASAXMAMSAMXXMAMAAAAAXAMXXXMASXSAAMAAAAAAXMX
XAAAAAXAXXAAASMMXMSMMSAAAXMSMMMMSMMSAXAMXMAMMSMMMMMXMAXAMXMMSMAXSAMASMMXXASXMASXMXSAMXSAMXMMMXMSMXMXMMSSSXASXSASMSMMMAMXMXXSAXAXMXMXXSMMMSXM
XXXMXMMXSMSSMMASXXXMAMMAMSAMXAAMAAAMMMXMAXAMAAAAXAAXXMSASMSAMSMMMASAMXSAMXMAMAMXSAMXSXSXMAMASAMXMAAAMXMMXMAXXSASAMASMMXAAAASAMXMXMSSMMMXAMAM
ASXSAMMAMXAAXSASAMXMXXXAXXMMMSSSSMMXSAMMXXAMSSXMSXMSSXMXMAMAXMSAMXAAXMAXMMMMMSSXMASMSAMXMXSASASASMSMSAAMMSMMXMXMAMXAASXMMSMMAMASXAASAAAMMSAM
XAAXASAMMASXMMSSXSMMASMMXSAXAMAXXAXAMAXASXSMMMMMMXMAMXSAMXMMMXSXSSMMSXMXSXMAAXMXSXMAMAMAMXMAMMMASXXASXSMAAAMAMXMXMMMXMAAXMAMXSASMSAMMMMSAMAX
SSSMAMMXMXMXMXMMAAASASAAAAASXMMMSXMMSSMMSAAXAXXMAAMAMAMASAMASMSAXMAMSXSAMASMMSAAAMSXSAMMMAXMXSMMMMMXMMMMMSMMAXXAAXSXSSXMMSMSXMMSMMXXSXMMMSSM
AAAMXMXSXAXXXSAMSMXMMSMMMMMMAAXXMASXAMAXMXMXSXXMXSSSSSSXMASASASXMSSMMAMMMAMMMMMMSMAMSMSMSMSMAMAAAXMAXAXXXAXSXMXSMSXAAXXSAMXSAMASXMAMSAMAXAAX
MSMMXMASMMMSMMAMMXMMAMXSXSMXSMMSMMAMXSMMMMMXXMMSXAAAXAAAXXAAMAMXXAAAMXMAMXSXXAASAMMMXXAMAAAMMMSSSSMMSMMMMMMMAMXMMXMXMMXMASASXMASASAMSAMAMSSM
XAXSMMAXAAXAASMMMAMMASXXAASAMXXAXSAMXSMAAAMMXAASMMMMMXMMMMMMMSMMMSSMMXMXXXAMSSMSASXAMMSSMSMXSAXXMAMXAAASASASAMAXMAXXAMXSAMMSMMXSMXAMXXMXMMXA
XMXMAMMSSMXMMMAASAMXASAMXMASXSSMXSASAMSSXMSAMMMSASXXXAXAXAAAXXMAXAMAAXAAMSAMAXMSMMMMSAAAAXAAMXMXSSMSMSMSASXSXSAXXASMMMMMXSASAMAMMSMMMMMXMSSM
MSSSSMMAAMXSXSXMSMSMMXMMSXMAXMAMASMMAMXMAAAXMAAXAMMSSMSMSSSSSSSMSASXMXMMXAAMXSMXAMXAMMXMMMMMSMMXAAASAXAMMMAMAMMSMMSAXXXAAMASXMASAAAAAAXSMXAM
MAAAAAMSMMAMAXSXMASMMSAXAMXSASAMMSXSXMAMMMMASXMMAMAXXAAAMAAAAXXXSAMMAMXSXMXMXMASXMMMSMMSXSMAMAMAMMMMAAMMAMAMAMASAMSAMXMASMMMMXAMMSXSSXMXMSXM
MSSMXMAMXMASAMSXMAMAAXMMMMAMXSASASXSXMMMMXXASAMSXMMMMSMSMMMMMMMXMXMAXAMMMSAMXMMMMAMASAMMASMMSSMSAMXSSMXSASXMMXXXAMSASXSAMXSAMMSXXXAAAASAXMAS
MAAXXMASMSASAXSMMSSMSSXAXMAXASAMASAMMMSASAMXMAMAAMMAAXMXXMXMAMMAMMXMAMAAAASAMXXMSMMMSAMMAMXAAXAASMMMAAXMAMMXSMMSAMSAMASXSMMXSAMXAMMMSXMAXXXS
MXSMXMXAXMASMMSAMAAAAXMSXMASMMMMMMAMSASXSXMASAMXXXASASMSXMAMAAMASAAXMXSASMXMMSMMAMAAMXMMAMMMMSMMXSMXMMMSASXMSAAXXMMXMXMASAMXMAXMMMMXMMMSMMAS
SSXMXSAMXXMXMASAMSMMMMMMASMAXASAXMSAMXSAMAMXMAXAMSAMAMXAXSASMXXAXXAMMXMAMAMXAAAMXMXSXSSSMSXMAAMASASXAAAMAXXAMMMMSXMXSMMXMAXXXMMMSASAXSAXAXAX
SMMSAXMMMAMAMMSAMXMSSXASAMXMXMSASAMAMMMMMSMMSSMAXMAMAMAXMMXSAAMMMSMSMSMAMAMMSSXMSAMXMMAAAAAMSXMMSAMSSMSMSSMMMAAXXAMAXAXSSMMSXXAAAMSAXMASAMMS
MAAMXXXAMAXAXMMMASMAMSMMXMAMMAMMMXSAMXAASAAXAXMXMMMMSAMSAMAMMMXMAAAAAAMASXMMAMAAAAAXAMXMMMXMMASXMAMAMXXXXAMASXSMSAMSSSMMASAMXMMXMMMXMMAMMAAM
SMMSXSSXSSXMMSAXAXMAMMXMMSMMAMXAAXXASMSMSASMMMAMXAXAXAXSAMXSAAAMSMSMAMXMAXXMASMMSAASMSXSASXMMAMASXMMSMSMSAMXMXAMXAMXMXXSAMMMXAAASXMSAMXSSMXS
XMASMASMAMASASXMAXMXMMAMAAAXSXSSSSSXAAMMSXMAXASMSSSSSSMMAMMAMMMMAAMMSMSAMXSXAXAXXAXXAAXMAMAMMSSMMXAXXAAAMXSXMSXXMAMXAXXMASAMMSMXSAAMSMAXAAAM
AMAXMAMMASMMMSASMSMAASASXMSMXAMAAXAMXMAAXASXMXMAAXAAAMXSXMAMXMAXMSMAAMASMAXMSSSMASMMSMMMAMXMAXAMMSMMMSMSMAMXXMAMSXMMMSMXAMASAAMSMMMMAMXXXMXS
SMASMMSMAMAAMSMMAAMXMAAXMAMAMXMMMMSAMXMSSMSMAMMMMMMMMMMAMXMASXXSAMMSSMXAMMXMAAAMMMSXAMSSMXAMXSAMXAAAXMAXMXSAMMAMASXAAAMMMSAMMSMAXXAXAXMSXMXS
AXMAMSMMMMSMMXMMSSMSSSMXMAMSAMXAXAXSXAMXXAMMMSAMAAAAMAMXSAMXMAXMMMAXAMSMXSAMMSMMAAXXMMMAAMSMMMAMSSSMSMXXMMAAMSASMSMMMMSAASMSAXXMXSMMSXSAASAM
MSMSMAXAXMXASXXAXAAAAAXXMASAAMSXSXMAMAAAMSMAAXASXSMXXASAMASMMSMXSMMMAMAMASASXXXSMSSSMASMMMAAMMAMMAMXXMASMSMSMMASXSASAAMMMSASXMAMMAMAMXMSSMAS
XXAASMSASXMMMXMSXMMMSMMSMMMXMMMXAMXAAXMASAMMMXXMXMASMMMXMSMXAMXXMAXMAMXMASMMXMAMAMAASAMAXXSSMMSSMSAMXMXXAAMAXMAMASAMMSMSSMXMAXAMSAMSMMAMMMMM
SMMMSXMAMAASAXMASXMXMXMASASASAXMMAXMSMSMAMSAMSMSMMXMAMASXAMMSXMASAMXSMXMASASMMAMAMMMMSSXSMAAXAAAMMAMXSSMSMSASMAMXMXMXMAXAAAMMMSXMAMAASMSMAMM
MAMAMXMAMMMMAMXMASXAAMSASMSASXSSXXSAXAAAAXSMMAAMAXXSXMAMAMXAMAXXMASAXXXMXSXMASMSXMXAAXXAMMSXMMSXMMAMAXMAXAMAXMAMAMXMXMMMSSMSMMXASMMSMMAAMASA
SAMXSXSXSXXMXMXMXSSXMXMASAMAMMXMAAMAMXMSSMSAMMSMXMAMXMMSXXMASAMMXMMASASMXMASXMASAMSMMSMSMAMAMXXAMSSMMMMMMXMXMMSSMSSMASAAMAXAASXXMMAAAMSMXXSX
SMSXAXAAMMXAAMASXMAMSMMXMXMXXSAMMMMSMMXAMXSAMSMXAAASXSAAXSMXMAMXSMMMMXAMXSMMMMSMXMAAMXXXMASXSASAMAXMXASAMXXAASAAAAAMAXMMMSMXXMMMAMMSXMXMSAMX
MAMXXMMAMAMXMSAXMXAMAMSASXSMASMXSAAMAXMAMAMAMXASXMASAMMSSXAMSAMXAAAXXMMAAMXMXSAMMMAXXAMXXAMAMXSMMSSMSSSXMAMSMMMSMSSMSSSXAMMSSMSSMMAXASAMXSAS
MAMMMAXXMXSAAMXMXSMXXSXASAAMMMSASMSSXXSAMASAMMMMSMAMMMAMAMAASASXSSMSAAXMASAMXSASMMMSAMSSMAMXMMMMAAAXSAMAMMMXASAMMMXAMAMMMMAXAAAAXMASAMASAMXS
SMSMASMXMAMXSAMXAMASMMMSMXMMSAMXSAXAMXXXMAXASAAAAMSMASXMAXXMSMXMAMXSMSSMMSASMSMMAAAXAXAAMAMXMAAMMXSMMMMASMMSAMASMSMSMAMAAMXSSMSSMMAXXSXMAMAX
AAAMSXMASMMMMXXMMSASAASAAXXAMXMMMMMMASMSMMSAMXMXXXXXMXAMASXMMASAMXASAMXAAMXAMXXXMMMXAMXSXMSXSMMSSXMAMXMAMAAMAMXMAAAASXSSSSXAXXXAMMSSMAMSSMSS
MSMSAXXAXAMXMASXAMASAMXMXMMMSMSASAMXSMASAMMAMMSMSMSMMSAMXMAAMSMXMMMMMMSMMSXSSMSMSAXMXAXMASAMXSSMMASMMAMSSMMMAAMMSMSMSXMMAXMMSXSXMAXAAMXAAAAM
XXXMASMSMSAMXAXMAXXSXMMXAMAXMAAMSASMXMMMAMSAMAAAAAAAASXMXSSMMMAMXXAAMMMMAAXAAMAAMAMSMSASXMASAMMASAMASXXXAMSXSSMXAAAXMASXSXAXAXSAMXSXMXMASMMS
XSXMASAMMMMMMMMXSAMMAMXMMSMSMAMMMAMXAXSSXMMSSSMSMSMSMXAMMMMAAXAMASMMMAMMSSMSXMMSMAMAAXASXSXMAMSAMAMMMMMSMMSAMAXXMXMXSMMAXMXMASMAMAMXSASAMAXX
AASXMMMMAXASXMSAXAXXAMAMMAAAXAMSXSMSMSAXASXMMMMAAXXXMSSMAAMMMMAMXXAASXSAAAAAMMAXMMSMSMAXMXXSXMMASAMSASAAXAMAMMMMSMSASAMMMSAMXAXAMAAASXSASAMM
XMAMAAAMXSMSAAMMMSMSSMSMXMSMSMSXAAAAXSMMASAMXASMSMMXMAMXSSSMSAMXSMSMMAMMXMMMAMAMXXAMXMMMSXASMMSXMAASAMASXMSMMXSXMASAMXMSASASAMSXSMMMSAMAMXAA
MXMSSMSMAMMMMMMAMMAXAAXMSMXAAMMMMMSMXXXAXXAMSAMSAMXAMASMMMAASXMASMAAAXSSMSSXSMSXMMMXAMAAXMAMXXSXMXMMSMAMMXAMXAMAMMMMMXMAXXAMAXMAXMMAMAMAMMSM
MXXXXAXMAMSAMASASMSMMAMAAXSSMXAAAXXXSXSSMXSMMASAMXSXSASAAXMMMMAAMASMSMAAAAAMAAAASASXSMMXMMAMXMSAMSAMXMXMXSASMSMMXSASXMSSSMSMXMMAMXMAMSSXSAXA
MMMMMXMSSMSXSAMXSAXXMXMXMMMAMSSSSSMAXASASAMXMMMMSMMAMAMMMMSAMXSXMAXAXMSMMMMXMAMMSASAXASAXXASAAMXMAASXMMSXSAMAXAMAMAMAAXAXAMAMXXXXXXAMMAAMASA
MASXMMXMXASAMMSMMMMXSAMXSXSAMMAAAMMSMXMAMMXAMAAXAAMXMSMXMXSASAMAMMMAXAXXMXSSMSXXMMMAMAMMMSASXSXMASMMAMXAMMAMAXAMMMMSMMMMMAMAMXMASMSSSMMMMXMM
SASAAXMASMMAMAAAAXSASASASASMSMMMAMAMASMSMSSSSSSSSSMXAASXMASAMXSXMXMXMAMXAAAAAXXMMMMAMXMAXMMMXMASAMXSMXSMMSMMMSAMXAMAMXAMMMSXMXSAXMAMMAXXXMAX
MASMMMAXXXSXMSSSMSAASMMMMAMAAMXXAMASXXMAAAAAXAMXAAXMSASXMAXXAMXXSXSMMMMMMASMMMXSMSMMSXMXSXSAMXXMASXMXAAXAAAAAMXMSXXASXXSAXMMMXMXSMMMSMMSSSSM
MAMMMXSXMASAMAMMMAMMMMXXMXMSMSXSXSASMASMSMAMXMXMMMXXMXXAMSSSMMAXSASAAAASXAXAASASMAXXMXSXXXMAMSMSXMAMMMMMSXXMMMAMXMSMMAMSMXSASASXSAMXAAXSAAAX
SASAMXXMMMSXMAMAXSXSAXSMMXXASAAMAMXXXAMXAXMSMMASAXMXSMMSSMAAAMSSMAMSSSMSAMSSMMASXXSXMASMMMSAMXAAXSXMASMXMSSSSSXSXMAMXMASAASMSASASXMSSSMMMMMM
MASXSMMXAMMMSMSMXMXSXSMAAXSXMMSMAMSSMSSSMMMAAMASASAAAASMAMSSMMMXMAMXMXXXAMXXAMSMMXSAMAMAXAAMXMAMXAXSSXMAAMXAXMXSASXSSXMXMMSXSAMXMMMMMAAASAMA
MMMMAAMSSMXAMXAXASAMXMMAMMSASAMXAXAAXAAXAASMSMAXAXMMXSASXMAAMXMMSASAMMXSXMXSXMXMXAXAMXSSMAXMXAXXMMXMASMMSMMXMMASMMXAXAMASXXAXXXXAAAMSSMMSASM
XSASMSXXAAMSSSSSMMAMMXXXSXSAMMXSMMSMMMSMSMSAAMSMSMSXMXAMXMSAMSXXXXSASXAMXMASXMAXMASMSMAXMAXSXMSAXXAXXAMXMASMMMASXMMSMMXAXAMSMMXMSSXMAMAMSAMM
MSASAMMMMMMAAAMAASXMASMMMAMXMMAXMAMAMAAMAAXXSMXAXAMMXMAMXXMAAXXMSXSAMMAMAMMSASASAMXAAMAMMSXSAASAMSMMAMXXSAMAAMAMASXMASMMSMAXAMSAAAMMXXAMMAMA
AMAMMMAAXAMMMMSSMMMMXSAMMAMAAMMMSASXMSSSMMMSMAMAMAMMAAASXXSMMMMSAMMAMSMMXXAMMSMSMMMSMMXSAXAMMMMMMAASMMSXMASMMMSSXMASAMXXAXXSAMAMXSMMAXSSSMMM
SMSSXMSASMSAAXXAAAXXASAMSXSSSXSAMXSAAMAAXXSAMAMMSSSSXSAMXAXMAASAMMXMXSMSMMMSXMAMXXAXAAAMMMAMAAAXMMXMAAMMSXAXAAXAXMXMAMMSMSMSAMXSXAAMMMMAAXMX
AAAXMXMAMXXMSXSSSSMMXSXMXMMXMAMASXXMMMXAMXSASMSMAAXAAXASMMMSMMSAXAXSSMAAXSASMAMSMMMSAMXAASMSSSSXXSASMMMXSMMSMSSSMXAXAMAAAAMMASMMMSMMSAMSMMMA
MMMSMSMSMSSMXMAAAAMSMMASMXSAMXSAMAXSXSXXMAXMMAAMMSMXMSMMMMMMAAMMMMSMAMMMSMAMAAXAAAAMXMSSXSAAMAXAXSAXMASAXAXAAAXAXMASXMSXSMSAAXAAAAMASAXAMAAX
XAXMMAAAXXAMSXMMMMMAAMAMAXMMXAMMMMAXAMMSMASMMSAMXXXXXMXAAMMSMMMSAXMMXXSXXMXMSSSSSMSSXMXMAMMMMAMMMMXMSMMMSMSMSMSAMXMAXAMAXXXMSSSMSMSAMXSMSMSM
SSSSSMSMSSMMSMXXXSSSSMSSSSSSXSMSAXSMMMAAMXMAAXAMXMXMASMSMXAAAMASMSMXMXAASXSAXAAAAMXAMMAMAMAMMSMMAMAMAAAMAASXMMXMASXXXXMAMASAAMXAMMMMSXSXSAAA
SAXAXAAAMXXASMMMAXAAXAMXAXAAXMASASXMAMXXSASMMMMSAMXSMXAXAMXSSMMSXAMAMMMMMAMXMMMMXSAMXSASAMMAAMMSSXXSXXMSMXMASMMMSMMMMXMXSAMSMSMXMXAMXMSAMMMX
SMSMMSMSMSMMXSAMXXMSMSMMAMMMSMMMXMASASMMMXMASXMAMXAMXMMMXSAAAXXMXMSASAAXMXMAMXSMXAXSAMMSMSSMMSAAXMMMMSXXMXSAMAAMXXAAAASMMMXXXAXMSSMXMAMAMASX
MXMXMAAXXAAXXSXMSSXAAAXXAMXAXAMSSMMSXSAAAMSAMAXASMAMAAAAAMMSMSAMSXSASMMMXAMASXMMSMXMMSAXMAMAAMMMSAXAAXXAXAMXXSMMXSSMSASXAMXMXMAAMAAXXXXSMAMA
SXAASMSMSSSMMXSXAXSMSMSSXMAMXMMAAAXXXXMMMXMXSXMASXMMSXXXSMXXASAASAMXMASMSMMAMAAAXXMXSMMSMSSMMSMASMMMSSXSMXXAXXAMAAMMMMXMASMAAXMSSMMMXSAMMSSM
SMSASXAAXXAAMASMMMSMAMXAMSMSMSMSMMMXMSMSMSMXSXXXMAXAMASMMMSMMMMMMAMSAXAASXMASMMMXMAXMAXXMAXXSAMXXAAXAMXMAMSSMSAMSSXXAMASXMASMSMAMAAAMMAMAXMX
SAMXSXMSXSSSMASAXAMMAMMMAXAAMAAXMSMMAAAAAMXAMASMMSMMSASAAAAAAXXXASMXAMXAMXXAXAAAAMXMSAMSXMSMSASXSSSSXSSMAMAAASAMXMAMAXAMAMMMAAMSSSMSXMMMXMSM
MSMAMXXAXAAAMXSAMXSXSMMXSMSMSMSMAAAAMMSMSMMXSAMAAAAXMASAMXSXMXMMMXAXMMSSMMMMSSMMMSMAXAXSAASXSAXAMAAAAAXSXMMSMSXMAMSSSMASAMAMSMSAAAAMAMSAAAXX
SXMASMSASMSMMMMXMASXAASAMMAAAAXMMMMSMMXXAXSXMASXMSMMMAMMMMXMSASAMMSMAAXAASAMAAXXAAMSMSASMMMAMAMSMMMMMMAAXMXXAMXMAAXAMXMMMMXMAMMMXMAMAMMASMMM
MAMXAAXASXMASASXMASMSMMASXMMMSMSMSAXASMSSMMXSAMAMMMAMASAAXMASASASAAXXMSMMMSMXSAMSSSMSMASXAMAMAMXAMXXXMMMXSAMAMXMMMSASAXAASMSASXSSMASAMXAMAAA
SSMMMMMSMXSAXASAMASAAAMXMASXXXAXAMASAMAAAAXAMASXMASXSSSMMSMMMASAMMSMSAMXSAMXAXMAXXXMAMAMMXSMSMXSAMSMXMSMMMMSMMAXMXMAMAMXMXAXAMXMASASASMMSXMS
AAAAMXMAAMMMMAMXMAMXMXXXSAMMMMSMMMMMAMMMMSMMSAMXSAMXMAMMMSAAMMMAMXAAXAMAMAAMXSXMMXMMXMSSMXSAMXAMAMAAAXAAMXAAASMSXAMSMSSSXXSSSMMSAMMSXMAMXXAX
SMSMSASMSMAMSAMAMAXSXMSAMXSAXAXMAAAMSMSAMAAMMXSXMASMMAMSASXMSXMMMSMSMXMASMMXSMMAMASMXMAAXAXMAMSMMMMSMSSMMMXMXAAMMMXAAXAAXMAAAAAAXXMXMAXMAMSS
XAXASAXXAMAMSASXSMXMAXAXMASXSMSSSSSSMXSASMSMMMSMMAMXXMXMMSAMXXAAASAMXMXMSMXMXAAXSASMAMSSMMSAMMXAXAXAAXAASXASXMXMAMXMSMMSXMASMMMSAASAMXSMAXAX
MAMAMAMSXSAXXAMXMXAXAMMAMXSASXAAXXMAXMSAMAXXSAMXMASMSSMAMMMMAMSMMSAXAAMSXMAAMXMXMASMSXMAAXMAXASXSMSMSMSMMAXXAAXSASAMAAXXAMAMXXXXXXMASASXSMMS
MMMMMMXMASXSMAMASXMSAXXAMXMAMMMMMXMMSMMSMAMSMMXMMASAAMMMMMAMAXXMASXMASXMAXSMMMMAMAMXXASMMMSSMMSAMXAXMAMXSXMMAMMSASMSMSMSXMSMMMSMMXSSMXSAXAXA
MAAAAXAAXMASMSMMAAAMAXSASAMAMXSASXXXMMXAMMMXXSASXSMMMSMSASMSMSMMMXMASXASMXMSAAMXMXSMXAMXSXAXAAMXMMMSMAMAMAMXAMXMAMXSAMXSAAXXAAAAMAMAMSMMMSMM
SSSSMSSSXMAMAXAXMMMMXMMASXSASXSASASMXMSXMSAAAXASMAXMASAMASAAXMAMAMXXXSXMMAAASMMAMXMASXMAMMMXMMMAMAAAMASASAMXMMSMAMXMAMASMMMSMSSSMASAMAAAAXAX
XAAAAAAMXMAXAMMXASAXSMSMSMSAXXMMMMMMAMXSAAMMSMXMXSMMAMXMAMXMMMSAMXMMMMMSXXSMAMSSMMXAAAMXMAAMMXSASMSSSMSASASXSAXXMMXMXMAMAAAXXXAMMMMXSMSMMSMM
XMSMMMSMAXSMSSXSASXSAAAMMAMAMSMSAAASMMAMSMXAMMMSMMMSSMMMXSAMAAAAXASAMXAMSMAXMMAMXXMSSMMSSMXSAASAMAAAXAMAMMAAMMSSMSMSAMXSSMSSMSAMSSMASAXAAAMA
SAMXSXXMXXXAAXASAMXMMSMSMMMAMAASXSXXMMAMAXMASAAAAMAAAAMMASASMSSMSASASMMSAXMMMMAXSAMXAAAMXMAMMMMAMMMSMSMSMAMXAMAAXASAMXMMAAMXAMSMAAMAMMSMSSSS
AMSXMASXSAMXMMAMXMASXMXAXXSXSMMMMMMMXSMSASASXMSSSMMXSAMMASMMMXXMAMSXMAXSAMXMSSXMASASXMMSAMXSXSSXMASAMXSMAXXSXMASMSMSAMXSMMMMSMXMSSMXSXXMMMXX`;

// convert input into a 2D array of characters, iterate over it to find all X's, then check whether the 3 characters in each of the orthogonal and diagonal directions are M, A, and S

const matrix = input.split(`\n`).map(row => row.split(``));
const yMax = matrix.length;
const xMax = matrix[0].length;
let count = 0;

function checkXMAS(x, y, dx, dy) {
	if (
		x + 3 * dx >= 0
		&& x + 3 * dx < xMax
		&& y + 3 * dy >= 0
		&& y + 3 * dy < yMax
		&& matrix[y + dy][x + dx] === `M`
		&& matrix[y + dy * 2][x + dx * 2] === `A`
		&& matrix[y + dy * 3][x + dx * 3] === `S`
	) count ++;
}

function checkAllXMAS(x, y) {
	[-1, 0, 1].forEach(dx => {
		[-1, 0, 1].forEach(dy => {
			if (!(dx === 0 && dy === 0) && matrix[y][x] === `X`) checkXMAS(x, y, dx, dy);
		})
	})
}

matrix.forEach((row, y) => row.forEach((_, x) => checkAllXMAS(x, y)));

console.log(`count of XMASes: ${count}`);

// as before, but find all A's, then check whether the adjacent characters in both diagonals are M and S in either direction for both lines

count = 0;

function checkAllCrossMAS(x, y) {
	if (
		matrix[y][x] === `A`
		&& x + 1 >= 0
		&& x + 1 < xMax
		&& x - 1 >= 0
		&& x - 1 < xMax
		&& y + 1 >= 0
		&& y + 1 < yMax
		&& y - 1 >= 0
		&& y - 1 < yMax
		&& (
			(matrix[y - 1][x - 1] === `M` && matrix[y + 1][x + 1] === `S`)
			||
			(matrix[y - 1][x - 1] === `S` && matrix[y + 1][x + 1] === `M`)
		)
		&& (
			(matrix[y + 1][x - 1] === `M` && matrix[y - 1][x + 1] === `S`)
			||
			(matrix[y + 1][x - 1] === `S` && matrix[y - 1][x + 1] === `M`)
		)
	) count ++;
}

matrix.forEach((row, y) => row.forEach((_, x) => checkAllCrossMAS(x, y)));

console.log(`count of X-MASes: ${count}`);
