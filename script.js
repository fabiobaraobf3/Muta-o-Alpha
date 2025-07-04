// ===== INÍCIO DOS DADOS DOS PRODUTOS =====
// ... (seu array allProducts FICA EXATAMENTE IGUAL aqui) ...
const allProducts = [
    // --- Injections ---

    // Testosterone Enanthate
    { id: 'inj_teste_rewix', name: 'Testosterone Enanthate 300mg/ml - Rewix Labs', substance: 'Testosterone Enanthate', brand: 'Rewix Labs', price: 40, image: 'images/Testosterone_Enanthate/inj_teste_300_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (300 mg/ml)', stockStatus: 'inStock' }, // Exemplo Esgotado: stockStatus: 'outOfStock' },
    { id: 'inj_teste_bm', name: 'Testosterone Enanthate 250/ml - BM Pharma', substance: 'Testosterone Enanthate', brand: 'BM Pharma', price: 41, image: 'images/Testosterone_Enanthate/inj_teste_250_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (250 mg/ml)', stockStatus: 'inStock' }, // Em stock (ou pode omitir) },
    { id: 'inj_teste_biosira', name: 'Testosterone Enanthate - Biosira', substance: 'Testosterone Enanthate', brand: 'Biosira', price: 34, image: 'images/Testosterone_Enanthate/inj_teste_300_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (300 mg/ml)', stockStatus: 'inStock' }, // Em stock (ou pode omitir) },
    { id: 'inj_teste_vermo', name: 'Testosterone Enanthate - Vermodje', substance: 'Testosterone Enanthate', brand: 'Vermodje', price: 26, image: 'images/Testosterone_Enanthate/inj_teste_250_vermo.png', category: 'injections', packaging: 'Frasco de 10 ml (250 mg/ml)', stockStatus: 'inStock' }, // Em stock (ou pode omitir) },
    { id: 'inj_teste_aurora', name: 'Testosterone Enanthate - Aurora Remedies', substance: 'Testosterone Enanthate', brand: 'Aurora Remedies', price: 42, image: 'images/Testosterone_Enanthate/inj_teste_250_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (250 mg/ml)' },

    // Testosterone Cypionate
    { id: 'inj_testc_rewix', name: 'Testosterone Cypionate 300mg/ml - Rewix Labs', substance: 'Testosterone Cypionate', brand: 'Rewix Labs', price: 40, image: 'images/Testosterone_Cypionate/inj_testc_300_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (300 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_testc_bm', name: 'Testosterone Cypionate 250/ml - BM Pharma', substance: 'Testosterone Cypionate', brand: 'BM Pharma', price: 40, image: 'images/Testosterone_Cypionate/inj_testc_250_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (250 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_testc_biosira', name: 'Testosterone Cypionate - Biosira', substance: 'Testosterone Cypionate', brand: 'Biosira', price: 34, image: 'images/Testosterone_Cypionate/inj_testc_300_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (300 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_testc_vermo', name: 'Testosterone Cypionate - Vermodje', substance: 'Testosterone Cypionate', brand: 'Vermodje', price: 26, image: 'images/Testosterone_Cypionate/inj_testc_200_vermo.png', category: 'injections', packaging: 'Frasco de 10 ml (200 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_testc_aurora', name: 'Testosterone Cypionate - Aurora Remedies', substance: 'Testosterone Cypionate', brand: 'Aurora Remedies', price: 40, image: 'images/Testosterone_Cypionate/inj_testc_250_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (250 mg/ml)', stockStatus: 'inStock' },


    // Testosterone Propionate
    { id: 'inj_testp_rewix', name: 'Testosterone Propionate 150mg/ml - Rewix Labs', substance: 'Testosterone Propionate', brand: 'Rewix Labs', price: 37, image: 'images/Testosterone_Propionate/inj_testp_150_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (150 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_testp_bm', name: 'Testosterone Propionate - BM Pharma', substance: 'Testosterone Propionate', brand: 'BM Pharma', price: 36, image: 'images/Testosterone_Propionate/inj_testp_100_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_testp_biosira', name: 'Testosterone Propionate - Biosira', substance: 'Testosterone Propionate', brand: 'Biosira', price: 33, image: 'images/Testosterone_Propionate/inj_testp_100_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (150 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_testp_vermo', name: 'Testosterone Propionate - Vermodje', substance: 'Testosterone Propionate', brand: 'Vermodje', price: 24, image: 'images/Testosterone_Propionate/inj_testp_100_vermo.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_testp_aurora', name: 'Testosterone Propionate - Aurora Remedies', substance: 'Testosterone Propionate', brand: 'Aurora Remedies', price: 38, image: 'images/Testosterone_Propionate/inj_testp_100_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (100 mg/ml)', stockStatus: 'inStock' },

    // Testosterone Mix (T400)
    { id: 'inj_testmix_rewix', name: 'Testosterone Mix (T400) - Rewix Labs', substance: 'Testosterone Mix (T400)', brand: 'Rewix Labs', price: 42, image: 'images/Testosterone_Mix_T400/inj_testmix_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (400 mg/ml) <br> <br> + Testosterone Proprionate - 40mg/ml <br> + Testosterone Enanthate - 180mg/ml <br> + Testosterone Cypionate- 180mg/ml', stockStatus: 'inStock' },
    { id: 'inj_testmix_bm', name: 'Testosterone Mix (T400) - BM Pharma', substance: 'Testosterone Mix (T400)', brand: 'BM Pharma', price: 41, image: 'images/Testosterone_Mix_T400/inj_testmix_bm.png', category: 'injections', packaging: 'Frasco de 10 ml (400 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_testmix_biosira', name: 'Testosterone Mix (T400) - Biosira', substance: 'Testosterone Mix (T400)', brand: 'Biosira', price: 34, image: 'images/Testosterone_Mix_T400//inj_testmix_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (400 mg/ml) <br> <br> + Testosterone Proprionate - 25mg/ml <br> + Testosterone Enanthate - 188mg/ml <br> + Testosterone Cypionate- 187mg/ml', stockStatus: 'inStock' },
    { id: 'inj_testmix_vermo', name: 'Testosterone Mix (T400) - Vermodje', substance: 'Testosterone Mix (T400)', brand: 'Vermodje', price: 27, image: 'images/Testosterone_Mix_T400/inj_testmix_vermo.png', category: 'injections', packaging: 'Frasco de 10 ml (400 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_testmix_aurora', name: 'Testosterone Mix (T400) - Aurora Remedies', substance: 'Testosterone Mix (T400)', brand: 'Aurora Remedies', price: 43, image: 'images/Testosterone_Mix_T400/inj_testmix_aurora.png', category: 'injections', packaging: 'Frasco de 10 ml (400 mg/ml)', stockStatus: 'inStock' },

    // Sustanon Mix
    { id: 'inj_sust_rewix', name: 'Sustanon Mix 300mg/ml- Rewix Labs', substance: 'Sustanon Mix', brand: 'Rewix Labs', price: 41, image: 'images/Sustanon/inj_sust_300_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (300 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_sust_bm', name: 'Sustanon Mix - BM Pharma', substance: 'Sustanon Mix', brand: 'BM Pharma', price: 40, image: 'images/Sustanon/inj_sust_250_bm.png', category: 'injections', packaging: 'Ampola de 1 ml x 10 (250 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_sust_biosira', name: 'Sustanon Mix - Biosira', substance: 'Sustanon Mix', brand: 'Biosira', price: 34, image: 'images/Sustanon/inj_sust_300_biosira.png', category: 'injections', packaging: 'Frasco de 300 ml (300 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_sust_vermo', name: 'Sustanon Mix - Vermodje', substance: 'Sustanon Mix', brand: 'Vermodje', price: 27, image: 'images/Sustanon/inj_sust_250_vermo.png', category: 'injections', packaging: 'Frasco de 250 ml (250 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_sust_aurora', name: 'Sustanon Mix - Aurora Remedies', substance: 'Sustanon Mix', brand: 'Aurora Remedies', price: 43, image: 'images/Sustanon/inj_sust_250_aurora.png', category: 'injections', packaging: 'Frasco de 250 ml (250 mg/ml)', stockStatus: 'inStock' },

    // Boldenone Undecylenate
    { id: 'inj_bold_rewix', name: 'Boldenone Undecylenate 300mg/ml - Rewix Labs', substance: 'Boldenone Undecylenate', brand: 'Rewix Labs', price: 43, image: 'images/Boldenona/inj_bold_300_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (300 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_bold_bm', name: 'Boldenone Undecylenate - BM Pharma', substance: 'Boldenone Undecylenate', brand: 'BM Pharma', price: 40, image: 'images/Boldenona/inj_bold_250_bm.png', category: 'injections', packaging: 'Ampola de 1 ml x 10 (250 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_bold_biosira', name: 'Boldenone Undecylenate 300mg/ml - Biosira', substance: 'Boldenone Undecylenate', brand: 'Biosira', price: 39, image: 'images/Boldenona/inj_bold_300_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (300 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_bold_vermo', name: 'Boldenone Undecylenate 200mg/ml - Vermodje', substance: 'Boldenone Undecylenate', brand: 'Vermodje', price: 35, image: 'images/Boldenona/inj_bold_200_vermo.png', category: 'injections', packaging: 'Frasco de 10 ml (200 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_bold_vet', name: 'Boldenone Undecylenate - Vet', substance: 'Boldenone Undecylenate', brand: 'Vet', price: 100, image: 'images/Boldenona/inj_bold_100_vet.png', category: 'injections', packaging: 'Frasco de 50 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_bold_equi', name: 'Boldenone Undecylenate 50mg/ml - Equipoise', substance: 'Boldenone Undecylenate', brand: 'Equipoise', price: 90, image: 'images/Boldenona/inj_bold_50_equi.png', category: 'injections', packaging: 'Info Frasco de 50 ml (50 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_bold_alpha', name: 'Boldenone Undecylenate 250mg/ml - Alpha Pharma', substance: 'Boldenone Undecylenate', brand: 'Alpha Pharma', price: 37, image: 'images/Boldenona/inj_bold_250_alpha.png', category: 'injections', packaging: 'Info Frasco de 50 ml (50 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_bold_aurora', name: 'Boldenone Undecylenate 250mg/ml - Aurora Remedies', substance: 'Boldenone Undecylenate', brand: 'Aurora Remedies', price: 47, image: 'images/Boldenona/inj_bold_250_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (250 mg/ml)', stockStatus: 'inStock' },

    // Masteron Enanthate
    { id: 'inj_maste_rewix', name: 'Masteron Enanthate 200mg/ml - Rewix Labs', substance: 'Drostanolone Enanthate', brand: 'Rewix Labs', price: 57, image: 'images/Masteron_Enanthate/inj_maste_200_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (200 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_maste_bm', name: 'Masteron Enanthate - BM Pharma', substance: 'Drostanolone Enanthate', brand: 'BM Pharma', price: 46, image: 'images/Masteron_Enanthate/inj_maste_200_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (200 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_maste_aurora', name: 'Masteron Enanthate - Aurora Remedies', substance: 'Drostanolone Enanthate', brand: 'Aurora Remedies', price: 58, image: 'images/Masteron_Enanthate/inj_maste_200_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (200 mg/ml)', stockStatus: 'inStock' },

    // Masteron Propionate
    { id: 'inj_mastp_rewix', name: 'Masteron Propionate 150mg/ml - Rewix Labs', substance: 'Drostanolone Propionate', brand: 'Rewix Labs', price: 50, image: 'images/Masteron_Propionate/inj_mastp_150_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (150 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_mastp_bm', name: 'Masteron Propionate - BM Pharma', substance: 'Drostanolone Propionate', brand: 'BM Pharma', price: 40, image: 'images/Masteron_Propionate/inj_mastp_100_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_mastp_biosira', name: 'Masteron Propionate - Biosira', substance: 'Drostanolone Propionate', brand: 'Biosira', price: 40, image: 'images/Masteron_Propionate/inj_mastp_100_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_mastp_vermo', name: 'Masteron Propionate - Vermodje', substance: 'Drostanolone Propionate', brand: 'Vermodje', price: 35, image: 'images/Masteron_Propionate/inj_mastp_100_vermo.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_mastp_aurora', name: 'Masteron Propionate - Aurora Remedies', substance: 'Drostanolone Propionate', brand: 'Aurora Remedies', price: 52, image: 'images/Masteron_Propionate/inj_mastp_100_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (100 mg/ml)', stockStatus: 'inStock' },

    // Primobolan (Methelonone - Injectável)
    { id: 'inj_primo_rewix', name: 'Primobolan Injectable - Rewix Labs', substance: 'Primobolan (Injectável)', brand: 'Rewix Labs', price: 67, image: 'images/Primobolan/inj_primo_100_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_primo_bm', name: 'Primobolan Injectable - BM Pharma', substance: 'Primobolan (Injectável)', brand: 'BM Pharma', price: 57, image: 'images/Primobolan/inj_primo_100_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_primo_biosira', name: 'Primobolan Injectable - Biosira', substance: 'Primobolan (Injectável)', brand: 'Biosira', price: 42, image: 'images/Primobolan/inj_primo_100_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_primo_vermo', name: 'Primobolan Injectable - Vermodje', substance: 'Primobolan (Injectável)', brand: 'Vermodje', price: 40, image: 'images/Primobolan/inj_primo_100_vermo.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_primo_bayer', name: 'Primobolan Injectable - Bayer', substance: 'Primobolan (Injectável)', brand: 'Bayer', price: 6, image: 'images/Primobolan/inj_primo_100_bayer.png', category: 'injections', packaging: 'Ampolas de 1 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_primo_aurora', name: 'Primobolan Injectable - Aurora Remedies', substance: 'Primobolan (Injectável)', brand: 'Aurora Remedies', price: 70, image: 'images/Primobolan/inj_primo_100_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (100 mg/ml)', stockStatus: 'inStock' },

    // Nandrolone Decanoate
    { id: 'inj_deca_rewix', name: 'Nandrolone Decanoate 300mg/ml - Rewix Labs', substance: 'Nandrolone Decanoate', brand: 'Rewix Labs', price: 47, image: 'images/Nandrolone_Decanoate/inj_deca_300_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (300 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_deca_bm', name: 'Nandrolone Decanoate - BM Pharma', substance: 'Nandrolone Decanoate', brand: 'BM Pharma', price: 40, image: 'images/Nandrolone_Decanoate/inj_deca_250_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (250 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_deca_biosira', name: 'Nandrolone Decanoate - Biosira', substance: 'Nandrolone Decanoate', brand: 'Biosira', price: 40, image: 'images/Nandrolone_Decanoate/inj_deca_300_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (300 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_deca_vermo', name: 'Nandrolone Decanoate - Vermodje', substance: 'Nandrolone Decanoate', brand: 'Vermodje', price: 35, image: 'images/Nandrolone_Decanoate/inj_deca_250_vermo.png', category: 'injections', packaging: 'Frasco de 10 ml (250 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_deca_aurora', name: 'Nandrolone Decanoate - Aurora Remedies', substance: 'Nandrolone Decanoate', brand: 'Aurora Remedies', price: 51, image: 'images/Nandrolone_Decanoate/inj_deca_250_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml (250 mg/ml)', stockStatus: 'inStock' },

    // Nandrolone Phenylpropionate (NPP)
    { id: 'inj_npp_rewix', name: 'Nandrolone Phenylpropionate 150mg/ml - Rewix Labs', substance: 'Nandrolone Phenylpropionate', brand: 'Rewix Labs', price: 40, image: 'images/Nandrolone_Phenylpropionate/inj_npp_150_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_npp_bm', name: 'Nandrolone Phenylpropionate - BM Pharma', substance: 'Nandrolone Phenylpropionate', brand: 'BM Pharma', price: 35, image: 'images/Nandrolone_Phenylpropionate/inj_npp_100_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_npp_biosira', name: 'Nandrolone Phenylpropionate - Biosira', substance: 'Nandrolone Phenylpropionate', brand: 'Biosira', price: 36, image: 'images/Nandrolone_Phenylpropionate/inj_npp_150_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (150 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_npp_aurora', name: 'Nandrolone Phenylpropionate - Aurora Remedies', substance: 'Nandrolone Phenylpropionate', brand: 'Aurora Remedies', price: 43, image: 'images/Nandrolone_Phenylpropionate/inj_npp_100_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (100 mg/ml)', stockStatus: 'inStock' },

    // Cut Mix (Mast + Trenb + Test)
    { id: 'inj_cutmix_rewix', name: 'Cut Mix - Rewix Labs', substance: 'Cut Mix', brand: 'Rewix Labs', price: 65, image: 'images/Cut_Mix/inj_cutmix_225_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (225 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_cutmix_bm', name: 'Cut Mix - BM Pharma', substance: 'Cut Mix', brand: 'BM Pharma', price: 66, image: 'images/Cut_Mix/inj_cutmix_200_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (200 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_cutmix_biosira', name: 'Cut Mix - Biosira', substance: 'Cut Mix', brand: 'Biosira', price: 65, image: 'images/Cut_Mix/inj_cutmix_225_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (225 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_cutmix_aurora', name: 'Cut Mix - Aurora Remedies', substance: 'Cut Mix', brand: 'Aurora Remedies', price: 67, image: 'images/Cut_Mix/inj_cutmix_150_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (150 mg/ml)', stockStatus: 'inStock' },

    // Blend Mix (Deca + Test)
    { id: 'inj_blend_biosira', name: 'Blend Mix (Deca + Test) - Biosira', substance: 'Blend Mix (Deca + Test)', brand: 'Biosira', price: 40, image: 'images/Blend_Mix_Deca_Test/inj_blendmix_250_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (250 mg/ml)', stockStatus: 'inStock' },

    // Dianabol Injectable
    { id: 'inj_dbolinj_biosira', name: 'Dianabol Injectable - Biosira', substance: 'Dianabol Injectable', brand: 'Biosira', price: 36, image: 'images/Dianabol_Inj/inj_dbol_50_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (50 mg/ml)', stockStatus: 'inStock' },

    // Winstrol (Stanozolol Injectable)
    { id: 'inj_winstrol_rewix', name: 'Winstrol Injectable - Rewix Labs', substance: 'Winstrol (Injectable)', brand: 'Rewix Labs', price: 43, image: 'images/Winstrol/Winstrol_Inj/inj_stano_100_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_winstrol_bm', name: 'Winstrol Injectable - BM Pharma', substance: 'Winstrol (Injectable)', brand: 'BM Pharma', price: 41, image: 'images/Winstrol/Winstrol_Inj/inj_stano_50_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (50 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_winstrol_biosira', name: 'Winstrol Injectable - Biosira', substance: 'Winstrol (Injectable)', brand: 'Biosira', price: 39, image: 'images/Winstrol/Winstrol_Inj/inj_stano_100_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_winstrol_vermo', name: 'Winstrol Injectable - Vermodje', substance: 'Winstrol (Injectable)', brand: 'Vermodje', price: 35, image: 'images/Winstrol/Winstrol_Inj/inj_stano_50_vermo.png', category: 'injections', packaging: 'Frasco de 10 ml (50 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_winstrol_desma', name: 'Winstrol Injectable - Desma', substance: 'Winstrol (Injectable)', brand: 'Desma', price: 15, image: 'images/Winstrol/Winstrol_Inj/inj_stano_50_desma.png', category: 'injections', packaging: '3 Ampolas de 1 ml (50 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_winstrol_aurora', name: 'Winstrol Injectable - Aurora Remedies', substance: 'Winstrol (Injectable)', brand: 'Aurora Remedies', price: 47, image: 'images/Winstrol/Winstrol_Inj/inj_stano_50_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (50 mg/ml)', stockStatus: 'inStock' },

    // Trenbolone Acetate
    { id: 'inj_trenace_rewix', name: 'Trenbolone Acetate 100mg/ml - Rewix Labs', substance: 'Trenbolone Acetate', brand: 'Rewix Labs', price: 50, image: 'images/Trenbolone_Acetate/inj_trenace_100_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_trenace_bm', name: 'Trenbolone Acetate - BM Pharma', substance: 'Trenbolone Acetate', brand: 'BM Pharma', price: 47, image: 'images/Trenbolone_Acetate/inj_trenace_100_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_trenace_biosira', name: 'Trenbolone Acetate - Biosira', substance: 'Trenbolone Acetate', brand: 'Biosira', price: 40, image: 'images/Trenbolone_Acetate/inj_trenace_100_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_trenace_vermo', name: 'Trenbolone Acetate - Vermodje', substance: 'Trenbolone Acetate', brand: 'Vermodje', price: 35, image: 'images/Trenbolone_Acetate/inj_trenace_100_vermo.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_trenace_vetnab', name: 'Trenbolone Acetate - Veterenária (Nabolic)', substance: 'Trenbolone Acetate', brand: 'Veterenária (Nabolic)', price: 95, image: 'images/Trenbolone_Acetate/inj_trenace_75_vetnab.png', category: 'injections', packaging: 'Frasco de 30 ml (75 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_trenace_aurora', name: 'Trenbolone Acetate - Aurora Remedies', substance: 'Trenbolone Acetate', brand: 'Aurora Remedies', price: 58, image: 'images/Trenbolone_Acetate/inj_trenace_100_aurora.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },

    // Trenbolone Enanthate
    { id: 'inj_trene_rewix', name: 'Trenbolone Enanthate - Rewix Labs', substance: 'Trenbolone Enanthate', brand: 'Rewix Labs', price: 61, image: 'images/Trenbolone_Enanthate/inj_trene_200_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (200 mg/ml)', stockStatus: 'inStock'  },
    { id: 'inj_trene_bm', name: 'Trenbolone Enanthate - BM Pharma', substance: 'Trenbolone Enanthate', brand: 'BM Pharma', price: 48, image: 'images/Trenbolone_Enanthate/inj_trene_200_bm.png', category: 'injections', packaging: 'Ampola de 1 ml x 10 (200 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_trene_biosira', name: 'Trenbolone Enanthate - Biosira', substance: 'Trenbolone Enanthate', brand: 'Biosira', price: 42, image: 'images/Trenbolone_Enanthate/inj_trene_200_biosira.png', category: 'injections', packaging: 'Ampola de 1 ml x 10 (200 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_trene_vermo', name: 'Trenbolone Enanthate - Vermodje', substance: 'Trenbolone Enanthate', brand: 'Vermodje', price: 35, image: 'images/Trenbolone_Enanthate/inj_trene_200_vermo.png', category: 'injections', packaging: 'Ampola de ', stockStatus: 'inStock' },
    { id: 'inj_trene_aurora', name: 'Trenbolone Enanthate - Aurora Remedies', substance: 'Trenbolone Enanthate', brand: 'Aurora Remedies', price: 61, image: 'images/Trenbolone_Enanthate/inj_trene_200_aurora.png', category: 'injections', packaging: 'Ampola de 1 ml x 10 (200 mg/ml)', stockStatus: 'inStock' },

    // Trenbolone Hexahydrobenzylcarbonate (Parabolan)
    { id: 'inj_trenhex_rewix', name: 'Trenbolone Hexa (Parabolan) 100mg/ml - Rewix Labs', substance: 'Trenbolone Hexa (Parabolan)', brand: 'Rewix Labs', price: 61, image: 'images/Trenbolone_Hexahydrobenzylcarbonate/inj_trenhex_100_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_trenhex_bm', name: 'Trenbolone Hexa (Parabolan) - BM Pharma', substance: 'Trenbolone Hexa (Parabolan)', brand: 'BM Pharma', price: 51, image: 'images/Trenbolone_Hexahydrobenzylcarbonate/inj_trenhex_100_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (100 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_trenhex_alpha', name: 'Trenbolone Hexa (Parabolan) - Alpha Pharma', substance: 'Trenbolone Hexa (Parabolan)', brand: 'Alpha Pharma', price: 33, image: 'images/Trenbolone_Hexahydrobenzylcarbonate/inj_trene_76-5_alpha.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (76,5 mg/ml)', stockStatus: 'inStock' },
        { id: 'inj_trenhex_aurora', name: 'Trenbolone Hexa (Parabolan) - Aurora Remedies', substance: 'Trenbolone Hexa (Parabolan)', brand: 'Aurora Remedies', price: 62, image: 'images/Trenbolone_Hexahydrobenzylcarbonate/inj_trenhex_100_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (100 mg/ml)', stockStatus: 'inStock' },

    // (Tri) Trenbolone Mix
    { id: 'inj_tritren_rewix', name: '(Tri) Trenbolone Mix - Rewix Labs', substance: 'Trenbolone Mix', brand: 'Rewix Labs', price: 61, image: 'images/Tri_Trenbolone_Mix/inj_tritren_200_rewix.png', category: 'injections', packaging: 'Frasco de 10 ml (200 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_tritren_bm', name: '(Tri) Trenbolone Mix - BM Pharma', substance: 'Trenbolone Mix', brand: 'BM Pharma', price: 48, image: 'images/Tri_Trenbolone_Mix/inj_tritren_200_bm.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (200 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_tritren_biosira', name: '(Tri) Trenbolone Mix - Biosira', substance: 'Trenbolone Mix', brand: 'Biosira', price: 40, image: 'images/Tri_Trenbolone_Mix/inj_tritren_200_biosira.png', category: 'injections', packaging: 'Frasco de 10 ml (200 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_tritren_vermo', name: '(Tri) Trenbolone Mix - Vermodje', substance: 'Trenbolone Mix', brand: 'Vermodje', price: 35, image: 'images/Tri_Trenbolone_Mix/inj_tritren_200_vermo.png', category: 'injections', packaging: 'Frasco de 10 ml (150 mg/ml)', stockStatus: 'inStock' },
    { id: 'inj_tritren_aurora', name: '(Tri) Trenbolone Mix - Aurora Remedies', substance: 'Trenbolone Mix', brand: 'Aurora Remedies', price: 62, image: 'images/Tri_Trenbolone_Mix/inj_tritren_200_aurora.png', category: 'injections', packaging: 'Ampolas de 1 ml x 10 (200 mg/ml)', stockStatus: 'inStock' },

    // HCG (Pregnyl)
    { id: 'inj_hcg_preg', name: 'HCG - Pregnyl', substance: 'HCG (Pregnyl)', brand: 'Pregnyl', price: 14, image: 'images/Pregnyl/inj_hcg_pregnyl.png', category: 'injections', packaging: '1 Ampola (5000 IU) + Solvente', stockStatus: 'inStock' },
    { id: 'inj_hcg_ovig', name: 'HCG - Ovigil', substance: 'HCG (Pregnyl)', brand: 'Ovigil', price: 20, image: 'images/Pregnyl/inj_hcg_ovig.png', category: 'injections', packaging: '1 Ampola (5000 IU) + Solvente', stockStatus: 'inStock' },

    // Hormonas de Crescimento
    { id: 'inj_hgh_bm', name: 'HGH - BM Pharma', substance: 'Hormonas de Crescimento', brand: 'BM Pharma', price: 165, image: 'images/Growth_Hormone/somatropin-bm-100.png', category: 'injections', packaging: '100 IU', stockStatus: 'inStock' },
    { id: 'inj_hgh_hyge', name: 'HGH - Hygetropin', substance: 'Hormonas de Crescimento', brand: 'Hygetropin', price: 75, image: 'images/Growth_Hormone/hygetropin-100.png', category: 'injections', packaging: '100 IU', stockStatus: 'inStock' },
    { id: 'inj_hgh_nord', name: 'HGH - Norditropin Simplexx', substance: 'Hormonas de Crescimento', brand: 'Norditropin', price: 90, image: 'images/Growth_Hormone/nord_simplexx_45.png', category: 'injections', packaging: 'Caneta Pré-cheia (45 IU)', stockStatus: 'inStock' },
    { id: 'inj_hgh_nordpro', name: 'HGH - Norditropin Flex Pro', substance: 'Hormonas de Crescimento', brand: 'Norditropin', price: 120, image: 'images/Growth_Hormone/nord_flexpro_45.png', category: 'injections', packaging: '45 IU', stockStatus: 'inStock' },
    { id: 'inj_hgh_huma', name: 'HGH - Humatrope', substance: 'Hormonas de Crescimento', brand: 'Humatrope', price: 180, image: 'images/Growth_Hormone/humatrope-72.png', category: 'injections', packaging: 'Cartucho para Caneta (72 IU)', stockStatus: 'inStock' },
    { id: 'inj_hgh_jint', name: 'HGH - Jintropin', substance: 'Hormonas de Crescimento', brand: 'Jintropin', price: 75, image: 'images/Growth_Hormone/jintropin_120.png', category: 'injections', packaging: '120 IU', stockStatus: 'inStock' },
    { id: 'inj_hgh_genpen', name: 'HGH - Genotropin Pen', substance: 'Hormonas de Crescimento', brand: 'Genotropin', price: 160, image: 'images/Growth_Hormone/genotropin-36-pen.png', category: 'injections', packaging: 'Caneta Pré-cheia (36 IU)', stockStatus: 'inStock' },
    { id: 'inj_hgh_genrec', name: 'HGH - Genotropin Recarga', substance: 'Hormonas de Crescimento', brand: 'Genotropin', price: 110, image: 'images/Growth_Hormone/genotropin_recharge_36.png', category: 'injections', packaging: 'Cartucho de Recarga (36 IU)', stockStatus: 'inStock' },
    { id: 'inj_hgh_omni', name: 'HGH - Omnitrope', substance: 'Hormonas de Crescimento', brand: 'Omnitrope', price: 110, image: 'images/Growth_Hormone/inj_omnitrope.png', category: 'injections', packaging: 'Cartucho ou Caneta (75 IU)', stockStatus: 'inStock' },
    { id: 'inj_hgh_evo', name: 'HGH - Evogene', substance: 'Hormonas de Crescimento', brand: 'Evogene', price: 135, image: 'images/Growth_Hormone/inj_hgh_evo.png', category: 'injections', packaging: '100 IU', stockStatus: 'inStock' },
    { id: 'inj_hgh_saiz', name: 'HGH - Saizen', substance: 'Hormonas de Crescimento', brand: 'Saizen', price: 110, image: 'images/Growth_Hormone/inj_hgh_saizen_36.png', category: 'injections', packaging: '36 IU', stockStatus: 'inStock' },

    // Peptídios - Biopeptide (Embalagem padrão de frasco para liofilizado)
    { id: 'inj_pep_acvr', name: 'ACVR2B (ACE-031) - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 75, image: 'images/BIO-PEPTIDE/ACVR2B.png', category: 'injections', packaging: 'Frasco Liofilizado (10 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_bpc', name: 'BPC-157 - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 33, image: 'images/bcp_157.png', category: 'injections', packaging: 'Frasco Liofilizado (5 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_cjc', name: 'CJC-1295 - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 35, image: 'images/BIO-PEPTIDE/cjc_1295.png', category: 'injections', packaging: 'Frasco Liofilizado (5 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_des', name: 'Des (1-3) IGF - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 46, image: 'images/BIO-PEPTIDE/des_igf.png', category: 'injections', packaging: 'Frasco Liofilizado (1 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_folli', name: 'Follistatin 344 - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 41, image: 'images/BIO-PEPTIDE/folis_1.png', category: 'injections', packaging: 'Frasco Liofilizado (1mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_ghrp2', name: 'GHRP-2 - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 34, image: 'images/BIO-PEPTIDE/ghrp2.png', category: 'injections', packaging: 'Frasco Liofilizado (10 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_ghrp6', name: 'GHRP-6 - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 34, image: 'images/BIO-PEPTIDE/ghrp6.png', category: 'injections', packaging: 'Frasco Liofilizado (10 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_mix', name: 'GHRP-6 + CJC.1295 Mix - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 34, image: 'images/BIO-PEPTIDE/ghrp6cjc.png', category: 'injections', packaging: 'Frasco Liofilizado Mix (10mg/Vial - 5mg ghrp-6 + 5mg cjc-1295)', stockStatus: 'inStock' },
    { id: 'inj_pep_grf', name: 'GRF 1-29 - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 34, image: 'images/BIO-PEPTIDE/GRF_1_29.png', category: 'injections', packaging: 'Frasco Liofilizado (10 mg)' },
    { id: 'inj_pep_frag', name: 'HGH Fragment 176-191 - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 34, image: 'images/BIO-PEPTIDE/hgh_fragment.png', category: 'injections', packaging: 'Frasco Liofilizado (5 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_igflr3', name: 'IGF-LR3 - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 34, image: 'images/BIO-PEPTIDE/igf.png', category: 'injections', packaging: 'Frasco Liofilizado (1 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_ipa', name: 'Ipamorelin - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 38, image: 'images/BIO-PEPTIDE/ipamorelin.png', category: 'injections', packaging: 'Frasco Liofilizado (10 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_mt2', name: 'Mt2 (Melanotan II) - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 35, image: 'images/BIO-PEPTIDE/melanotan2.png', category: 'injections', packaging: 'Frasco Liofilizado (10 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_rhgh', name: 'rHGH - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 34, image: 'images/BIO-PEPTIDE/rhgh.png', category: 'injections', packaging: 'Kit 100 IU' }, // Pode variar
    { id: 'inj_pep_serm', name: 'Sermorelin Acetate - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 38, image: 'images/BIO-PEPTIDE/sermorelin.png', category: 'injections', packaging: 'Frasco Liofilizado (5 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_tb500', name: 'TB-500 - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 40, image: 'images/BIO-PEPTIDE/tb500.png', category: 'injections', packaging: 'Frasco Liofilizado (5 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_pt141', name: 'PT-141 - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 33, image: 'images/BIO-PEPTIDE/PT_141.png', category: 'injections', packaging: 'Frasco Liofilizado (10 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_mgf', name: 'MGF - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 34, image: 'images/BIO-PEPTIDE/mgf.png', category: 'injections', packaging: 'Frasco Liofilizado (5 mg)', stockStatus: 'inStock' },
    { id: 'inj_pep_peg_mfg', name: 'Peg MGF - Biopeptide', substance: 'Peptídios - Biopeptide', brand: 'Biopeptide', price: 32, image: 'images/BIO-PEPTIDE/peg_mgf.png', category: 'injections', packaging: 'Frasco Liofilizado (5 mg)', stockStatus: 'inStock' },


    // --- Orals --- (Embalagem geralmente em # comprimidos/cápsulas x dosagem)
    
    // Anastrozol/Arimidex
    { id: 'oral_anastr_rewix', name: 'Anastrozol/Arimidex 1mg/comp - Rewix Labs', substance: 'Anastrozol/Arimidex', brand: 'Rewix Labs', price: 43, image: 'images/Anastrozol_Arimidex/oral_anastr_rewix.png', category: 'orals', packaging: '50 comps (1 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_anastr_teva', name: 'Anastrozol/Arimidex - Teva', substance: 'Anastrozol/Arimidex', brand: 'Teva', price: 35, image: 'images/Anastrozol_Arimidex/oral_anastr_teva.png', category: 'orals', packaging: '28 comps (1 mg/comp)', stockStatus: 'inStock' }, // Formato comum farmácia
    { id: 'oral_anastr_aurora', name: 'Anastrozol/Arimidex - Aurora Remedies', substance: 'Anastrozol/Arimidex', brand: 'Aurora Remedies', price: 51, image: 'images/Anastrozol_Arimidex/oral_anastr_aurora.png', category: 'orals', packaging: '50 comps (1 mg/comp)', stockStatus: 'inStock' },

    // Cabergolina
    { id: 'oral_caber_bm', name: 'Cabergolina - BM Pharma', substance: 'Cabergolina', brand: 'BM Pharma', price: 55, image: 'images/Cabergolina/bm_cabergol.png', category: 'orals', packaging: '50 comps (1 mg/comp)', stockStatus: 'inStock' },

    // Clenbuterol
    { id: 'oral_clen_rewix', name: 'Clenbuterol 40mcg/tab- Rewix Labs', substance: 'Clenbuterol', brand: 'Rewix Labs', price: 37, image: 'images/Clenbuterol/oral_clen_40mcg_rewix.png', category: 'orals', packaging: '100 comps (40 mcg/comp)', stockStatus: 'inStock' },
    { id: 'oral_clen_bm', name: 'Clenbuterol - BM Pharma', substance: 'Clenbuterol', brand: 'BM Pharma', price: 22, image: 'images/Clenbuterol/oral_clen_bm.png', category: 'orals', packaging: '100 comps (40 mcg/comp)', stockStatus: 'inStock' },
    { id: 'oral_clen_biosira', name: 'Clenbuterol - Biosira', substance: 'Clenbuterol', brand: 'Biosira', price: 21, image: 'images/Clenbuterol/oral_clen_biosira.png', category: 'orals', packaging: 'Info Embalagem Indisponível' },
    { id: 'oral_clen_aurora', name: 'Clenbuterol - Aurora Remedies', substance: 'Clenbuterol', brand: 'Aurora Remedies', price: 23, image: 'images/Clenbuterol/oral_clen_aurora.png', category: 'orals', packaging: '100 comps (40 mcg/comp)', stockStatus: 'inStock' },

    // Clomid
    { id: 'oral_clom_rewix', name: 'Clomid 50mg/comp - Rewix Labs', substance: 'Clomid', brand: 'Rewix Labs', price: 39, image: 'images/Clomiphene/oral_clom_50_rewix.png', category: 'orals', packaging: '50 comps (50 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_clom_bm', name: 'Clomid 50mg/comp - BM Pharma', substance: 'Clomid', brand: 'BM Pharma', price: 30, image: 'images/Clomiphene/oral_clom_50_bm.png', category: 'orals', packaging: '50 comps (50 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_clom_anfarm', name: 'Clomid 50mg/comp - BM Pharma', substance: 'Clomid', brand: 'Anfarm', price: 20, image: 'images/Clomiphene/oral_clom_50_anfarm.png', category: 'orals', packaging: '24 comps (50 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_clom_aurora', name: 'Clomid 50mg/comp - BM Pharma', substance: 'Clomid', brand: 'Aurora Remedies', price: 38, image: 'images/Clomiphene/oral_clom_50_aurora.png', category: 'orals', packaging: '50 comps (50 mg/comp)', stockStatus: 'inStock' },


    // Halotestin
    { id: 'oral_halo_rewix', name: 'Halotestin - Rewix Labs', substance: 'Halotestin', brand: 'Rewix Labs', price: 65, image: 'images/Halotestin/oral_halo_100cp_rewix.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_halo_bm', name: 'Halotestin - BM Pharma', substance: 'Halotestin', brand: 'BM Pharma', price: 38, image: 'images/Halotestin/oral_halo_50cp_bm.png', category: 'orals', packaging: '50 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_halo_bm_200', name: 'Halotestin - BM Pharma', substance: 'Halotestin', brand: 'BM Pharma', price: 70, image: 'images/Halotestin/oral_halo_200cp_bm.png', category: 'orals', packaging: '200 comps (10 mg/comp)', stockStatus: 'inStock' },   
    { id: 'oral_halo_biosira', name: 'Halotestin - Biosira', substance: 'Halotestin', brand: 'Biosira', price: 45, image: 'images/Halotestin/oral_halo_100cp_biosira.png', category: 'orals', packaging: 'Info Embalagem Indisponível', stockStatus: 'inStock' },


    // Dianabol
    { id: 'oral_dbol_rewix', name: 'Dianabol - Rewix Labs', substance: 'Dianabol', brand: 'Rewix Labs', price: 36, image: 'images/Dianabol/oral_dbol_10_rewix.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_dbol_bm', name: 'Dianabol - BM Pharma', substance: 'Dianabol', brand: 'BM Pharma', price: 35, image: 'images/Dianabol/oral_dbol_10_bm.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_dbol_biosira', name: 'Dianabol - Biosira', substance: 'Dianabol', brand: 'Biosira', price: 32, image: 'images/Dianabol/oral_dbol_10_biosira.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_dbol_vermo', name: 'Dianabol - Vermodje', substance: 'Dianabol', brand: 'Vermodje', price: 30, image: 'images/Dianabol/oral_dbol_10_vermo.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_dbol_britdisp', name: 'Dianabol - British Dispensary', substance: 'Dianabol', brand: 'British Dispensary', price: 90, image: 'images/Dianabol/oral_dbol_5_british.png', category: 'orals', packaging: '1000 comps (5 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_dbol_aurora', name: 'Dianabol - Aurora Remedies', substance: 'Dianabol', brand: 'Aurora Remedies', price: 32, image: 'images/Dianabol/oral_dbol_10_aurora.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },

    // Testosterone (Methyltestosterone)
    { id: 'oral_methtest_rewix', name: 'Methyltestosterone 25mg/comp - Rewix Labs', substance: 'Testosterone (Methyltestosterone)', brand: 'Rewix Labs', price: 42, image: 'images/Methyltestosterone/oral_10_Methyltestosterone.png', category: 'orals', packaging: '50 comps (25 mg/comp)', stockStatus: 'inStock' },

    // Anavar (Oxandrolona)
    { id: 'oral_anavar_rewix', name: 'Anavar (Oxandrolona) - Rewix Labs', substance: 'Anavar (Oxandrolona)', brand: 'Rewix Labs', price: 60, image: 'images/Anavar/oral_anavar_rewix.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_anavar_bm', name: 'Anavar (Oxandrolona) - BM Pharma', substance: 'Anavar (Oxandrolona)', brand: 'BM Pharma', price: 55, image: 'images/Anavar/oral_anavar_bm.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_anavar_biosira', name: 'Anavar (Oxandrolona) - Biosira', substance: 'Anavar (Oxandrolona)', brand: 'Biosira', price: 40, image: 'images/Anavar/oral_anavar_biosira.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_anavar_vermo', name: 'Anavar (Oxandrolona) - Vermodje', substance: 'Anavar (Oxandrolona)', brand: 'Vermodje', price: 40, image: 'images/Anavar/oral_anavar_vermo.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_anavar_aurora', name: 'Anavar (Oxandrolona) - Aurora Remedies', substance: 'Anavar (Oxandrolona)', brand: 'Aurora Remedies', price: 62, image: 'images/Anavar/oral_anavar_aurora.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },

    // Oxymetholone (Hemogenin)
    { id: 'oral_oxy_rewix', name: 'Oxymetholone - Rewix Labs', substance: 'Oxymetholone (Hemogenin)', brand: 'Rewix Labs', price: 50, image: 'images/Hemogenin/oral_oxy_50_rewix.png', category: 'orals', packaging: '50 comps (50 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_oxy_bm', name: 'Oxymetholone - BM Pharma', substance: 'Oxymetholone (Hemogenin)', brand: 'BM Pharma', price: 36, image: 'images/Hemogenin/oral_oxy_50cp_bm.png', category: 'orals', packaging: '50 comps (50 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_oxy_biosira', name: 'Oxymetholone - Biosira', substance: 'Oxymetholone (Hemogenin)', brand: 'Biosira', price: 42, image: 'images/Hemogenin/oral_oxy_100cp_biosira.png', category: 'orals', packaging: '100 comps (25 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_oxy_vermo', name: 'Oxymetholone - Vermodje', substance: 'Oxymetholone (Hemogenin)', brand: 'Vermodje', price: 40, image: 'images/Hemogenin/oral_oxy_100cp_vermo.png', category: 'orals', packaging: '100 comps (50 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_oxy_britdisp', name: 'Oxymetholone - British Dispensary', substance: 'Oxymetholone (Hemogenin)', brand: 'British Dispensary', price: 70, image: 'images/Hemogenin/oral_oxy_100_britdisp.png', category: 'orals', packaging: '100 comps (50 mg/comp)' },
    { id: 'oral_oxy_aurora', name: 'Oxymetholone - Aurora Remedies', substance: 'Oxymetholone (Hemogenin)', brand: 'Aurora Remedies', price: 49, image: 'images/Hemogenin/oral_oxy_50cp_aurora.png', category: 'orals', packaging: '50 comps (50 mg/comp)', stockStatus: 'inStock' },

    // Primobolan Oral
    { id: 'oral_primo_bm', name: 'Primobolan Oral - BM Pharma', substance: 'Primobolan Oral', brand: 'BM Pharma', price: 70, image: 'images/Primobolan_Oral/oral_primo_25_bm.png', category: 'orals', packaging: '50 comps (25 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_primo_biosira', name: 'Primobolan Oral - Biosira', substance: 'Primobolan Oral', brand: 'Biosira', price: 69, image: 'images/Primobolan_Oral/oral_primo_25_biosira.png', category: 'orals', packaging: '100 comps (25 mg/comp)', stockStatus: 'inStock' },

    // Winstrol Comp (Stanozolol Oral)
    { id: 'oral_winstrol_rewix', name: 'Winstrol Oral - Rewix Labs', substance: 'Winstrol Oral (Stanozolol)', brand: 'Rewix Labs', price: 37, image: 'images/Winstrol/Winstrol_Oral/oral_stano_10_rewix.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_winstrol_bm', name: 'Winstrol Oral - BM Pharma', substance: 'Winstrol Oral (Stanozolol)', brand: 'BM Pharma', price: 38, image: 'images/Winstrol/Winstrol_Oral/oral_stano_10_bm.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_winstrol_biosira', name: 'Winstrol Oral - Biosira', substance: 'Winstrol Oral (Stanozolol)', brand: 'Biosira', price: 33, image: 'images/Winstrol/Winstrol_Oral/oral_stano_10_biosira.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_winstrol_vermo', name: 'Winstrol Oral - Vermodje', substance: 'Winstrol Oral (Stanozolol)', brand: 'Vermodje', price: 30, image: 'images/Winstrol/Winstrol_Oral/oral_stano_10_vermo.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_winstrol_aurora', name: 'Winstrol Oral - Aurora Remedies', substance: 'Winstrol Oral (Stanozolol)', brand: 'Aurora Remedies', price: 38, image: 'images/Winstrol/Winstrol_Oral/oral_stano_10_aurora.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },

    // Trenbolone Oral
    { id: 'oral_tren_biosira', name: 'Trenbolone Oral - Biosira', substance: 'Trenbolone Oral', brand: 'Biosira', price: 39, image: 'images/Trenbolone_Acetate/oral_tren_25_biosira.png', category: 'orals', packaging: '100 comps (10 mg/comp)', stockStatus: 'inStock' },

    // Turinabol
    { id: 'oral_tbol_rewix', name: 'Turinabol - Rewix Labs', substance: 'Turinabol', brand: 'Rewix Labs', price: 45, image: 'images/Turinabol/oral_tbol_10_rewix.png', category: 'orals', packaging: '100 comps (10 mg/comp) <br> + (Clorodehydromethyltestosterone)', stockStatus: 'inStock' },
    { id: 'oral_tbol_bm', name: 'Turinabol - BM Pharma', substance: 'Turinabol', brand: 'BM Pharma', price: 39, image: 'images/Turinabol/oral_tbol_10_bm.png', category: 'orals', packaging: '100 comps (10 mg/comp) <br> + (Clorodehydromethyltestosterone)', stockStatus: 'inStock' },
    { id: 'oral_tbol_biosira', name: 'Turinabol - Biosira', substance: 'Turinabol', brand: 'Biosira', price: 34, image: 'images/Turinabol/oral_tbol_10_biosira.png', category: 'orals', packaging: '100 comps (10 mg/comp) <br> + (Clorodehydromethyltestosterone)', stockStatus: 'inStock' },
    { id: 'oral_tbol_vermo', name: 'Turinabol - Vermodje', substance: 'Turinabol', brand: 'Vermodje', price: 30, image: 'images/Turinabol/oral_tbol_10_vermo.png', category: 'orals', packaging: '100 comps (10 mg/comp) <br> + (Clorodehydromethyltestosterone)', stockStatus: 'inStock' },
    { id: 'oral_tbol_aurora', name: 'Turinabol - Aurora Remedies', substance: 'Turinabol', brand: 'Aurora Remedies', price: 47, image: 'images/Turinabol/oral_tbol_10_aurora.png', category: 'orals', packaging: '100 comps (10 mg/comp) <br> + (Clorodehydromethyltestosterone)', stockStatus: 'inStock' },

    // T3
    { id: 'oral_t3_rewix', name: 'T3 - Rewix Labs', substance: 'T3', brand: 'Rewix Labs', price: 29, image: 'images/T3/oral_t3_25_rewix.png', category: 'orals', packaging: '50 comps (25 mcg/comp)', stockStatus: 'inStock' },
    { id: 'oral_t3_bm', name: 'T3 - BM Pharma', substance: 'T3', brand: 'BM Pharma', price: 27, image: 'images/T3/oral_t3_25_bm.png', category: 'orals', packaging: '50 comps (25 mcg/comp)', stockStatus: 'inStock' },
    { id: 'oral_t3_unipharma', name: 'T3 - Unipharma', substance: 'T3', brand: 'Unipharma', price: 16, image: 'images/T3/oral_t3_25_unipharma.png', category: 'orals', packaging: '30 comps (25 mcg/comp)', stockStatus: 'inStock' },
    { id: 'oral_t3_aurora', name: 'T3 - Aurora Remedies', substance: 'T3', brand: 'Aurora Remedies', price: 28, image: 'images/T3/oral_t3_25_aurora.png', category: 'orals', packaging: '50 comps (25 mcg/comp)', stockStatus: 'inStock' },

    // T4
    { id: 'oral_t4_bm', name: 'T4 - BM Pharma', substance: 'T4', brand: 'BM Pharma', price: 27, image: 'images/T4/oral_t4_bm.png', category: 'orals', packaging: '50 comps (25 mcg/comp)', stockStatus: 'inStock' },

    // Tamoxifeno
    { id: 'oral_tamox_rewix', name: 'Tamoxifeno - Rewix Labs', substance: 'Tamoxifeno', brand: 'Rewix Labs', price: 37, image: 'images/Tamoxifen_Citrate/oral_tamox_20_rewix.png', category: 'orals', packaging: '50 comps (20 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_tamox_bm', name: 'Tamoxifeno - BM Pharma', substance: 'Tamoxifeno', brand: 'BM Pharma', price: 29, image: 'images/Tamoxifen_Citrate/oral_tamox_20_bm.png', category: 'orals', packaging: '50 comps (20 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_tamox_zymo', name: 'Tamoxifeno - Zymoplex', substance: 'Tamoxifeno', brand: 'Zymoplex', price: 26, image: 'images/Tamoxifen_Citrate/oral_tamox_20_zymoplex.png', category: 'orals', packaging: '30 comps (20 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_tamox_aurora', name: 'Tamoxifeno - Aurora Remedies', substance: 'Tamoxifeno', brand: 'Aurora Remedies', price: 37, image: 'images/Tamoxifen_Citrate/oral_tamox_20_aurora.png', category: 'orals', packaging: '50 comps (20 mg/comp)', stockStatus: 'inStock' },

    // Proviron
    { id: 'oral_provi_rewix', name: 'Proviron 25mg/comp - Rewix Labs', substance: 'Proviron', brand: 'Rewix Labs', price: 30, image: 'images/Proviron/oral_provi_25_rewix.png', category: 'orals', packaging: '50 comps (25 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_provi_bayer', name: 'Proviron - Bayer', substance: 'Proviron', brand: 'Bayer', price: 10, image: 'images/Proviron/oral_provi_25_bayer.png', category: 'orals', packaging: '20 comps (25 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_provi_aurora', name: 'Proviron - Aurora Remedies', substance: 'Proviron', brand: 'Aurora Remedies', price: 29, image: 'images/Proviron/oral_provi_25_aurora.png', category: 'orals', packaging: '50 comps (25 mg/comp)', stockStatus: 'inStock' },

    // Perda de Gordura (Sibutramina)
    { id: 'oral_sibut_rewix', name: 'Sibutramina - Rewix Labs', substance: 'Perda de Gordura (Sibutramina)', brand: 'Rewix Labs', price: 47, image: 'images/Sibutramina/oral_sibut_20_rewix.png', category: 'orals', packaging: '50 comp (20 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_sibut_aurora', name: 'Sibutramina - Aurora Remedies', substance: 'Perda de Gordura (Sibutramina)', brand: 'Aurora Remedies', price: 60, image: 'images/Sibutramina/oral_sibut_aurora.png', category: 'orals', packaging: '100 cápsulas (20 mg/caps)', stockStatus: 'inStock' },
    { id: 'oral_sibut_sibut', name: 'Sibutramina - Sibutramina', substance: 'Perda de Gordura (Sibutramina)', brand: 'Sibutramina', price: 38, image: 'images/Sibutramina/oral_sibut_20_sibut.png', category: 'orals', packaging: '30 cápsulas (20 mg/cáp)', stockStatus: 'inStock' },
    { id: 'oral_sibut_sibuterol', name: 'Sibuterol - Sibuterol', substance: 'Perda de Gordura (Sibutramina)', brand: 'Sibuterol', price: 55, image: 'images/Sibutramina/oral_sibut_sibuterol.png', category: 'orals', packaging: '120 comps Sibutramina: 3mg <br> + Clenbuterol: 0.5mg <br> + Vitamin D3: 400 UI <br> + Vitamin E: 75 UI', stockStatus: 'inStock' },

    // Sexuais (Embalagem muito variável)
    { id: 'oral_sex_cenforce200', name: 'Cenforce - 200', substance: 'Sexuais', brand: 'Cenforce', price: 23, image: 'images/Sexuais/oral_sex_200_cenforce.png', category: 'orals', packaging: '10 comps (200 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_sex_cenforce_d', name: 'Cenforce - D', substance: 'Sexuais', brand: 'Cenforce', price: 28, image: 'images/Sexuais/oral_sex_cenforce_d.png', category: 'orals', packaging: 'Sidenafil & Dapoxetine - 10 comps (160 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_sex_cialis', name: 'Cialis', substance: 'Sexuais', brand: 'Cialis', price: 16, image: 'images/Sexuais/oral_sex_cialis.png', category: 'orals', packaging: '4 comps (20 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_sex_tadarise', name: 'Extra Super Tadarise', substance: 'Sexuais', brand: 'Tadarise', price: 30, image: 'images/Sexuais/oral_sex_tadarise.png', category: 'orals', packaging: '10 comps (100 mg/comp) Tadalafil & Dapoxetine', stockStatus: 'inStock' },    
    { id: 'oral_sex_kamgel', name: 'Kamagra Gel', substance: 'Sexuais', brand: 'Kamagra', price: 25, image: 'images/Sexuais/oral_sex_kamgel.png', category: 'orals', packaging: '7 saquetas (100 mg/saqueta) Sidenafil', stockStatus: 'inStock' },
    { id: 'oral_sex_kamtabs', name: 'Kamagra Tabs', substance: 'Sexuais', brand: 'Kamagra', price: 14, image: 'images/Sexuais/oral_sex_100_kamtabs.png', category: 'orals', packaging: '4 comps (100 mg/comp) Sidenafil', stockStatus: 'inStock' },
    { id: 'oral_sex_kamgold', name: 'Kamagra Gold Ajanta', substance: 'Sexuais', brand: 'Kamagra', price: 28, image: 'images/Sexuais/oral_sex_kamgold.png', category: 'orals', packaging: '10 comps (100 mg/comp) Sidenafil', stockStatus: 'inStock' },
    { id: 'oral_sex_sildalist', name: 'Sildalist', substance: 'Sexuais', brand: 'Sildalist', price: 28, image: 'images/Sexuais/oral_sex_sildalist.png', category: 'orals', packaging: '6 comps (120 mg/comp) Sidenafil', stockStatus: 'inStock' },
    { id: 'oral_sex_sextream', name: 'Sextreme Power', substance: 'Sexuais', brand: 'Sextreme Power', price: 28, image: 'images/Sexuais/oral_sex_sextream.png', category: 'orals', packaging: '10 Comp Sidenatil + Retardante Dapoxetine', stockStatus: 'inStock' },
    { id: 'oral_sex_svigour', name: 'Super Vigour', substance: 'Sexuais', brand: 'Vigour', price: 28, image: 'images/Sexuais/oral_sex_svigour_6800.png', category: 'orals', packaging: '10 comps (6800 mg/comp)', stockStatus: 'inStock' },
    { id: 'oral_sex_avana', name: 'TOP Avana', substance: 'Sexuais', brand: 'Avana', price: 25, image: 'images/Sexuais/oral_sex_avana.png', category: 'orals', packaging: '(4 Comp x 80mg) Avanafil & Dapoxetine HCI Tablets', stockStatus: 'inStock' },
    { id: 'oral_sex_vigvip', name: 'Vigour VIP', substance: 'Sexuais', brand: 'Vigour', price: 28, image: 'images/Sexuais/oral_sex_vigvip.png', category: 'orals', packaging: '(10 Comp x 800mg)', stockStatus: 'inStock' },

    // --- Sarms --- (Embalagem geralmente em cápsulas)
	{ id: 'sarm_anda_rewix', name: 'Andarine S4 25mg/comp - Rewix Labs', substance: 'Andarine', brand: 'Rewix Labs', price: 57, image: 'images/SARMS/sarm_anda_25_rewix.png', category: 'sarms', packaging: '100 comp (25 mg/comp)', stockStatus: 'inStock' },
	{ id: 'sarm_anda_novo', name: 'Andarine S4 - NovoSarms', substance: 'Andarine', brand: 'NovoSarms', price: 58, image: 'images/SARMS/sarm_anda_100_novo.png', category: 'sarms', packaging: '30 ml (100 mg/ml)', stockStatus: 'inStock' },
     	{ id: 'sarm_card_rewix', name: 'Cardarine GW-501516 5mg/tab - Rewix Labs', substance: 'Cardarine', brand: 'Rewix Labs', price: 49, image: 'images/SARMS/sarm_card_5_rewix.png', category: 'sarms', packaging: '100 comp (5 mg/comp)', stockStatus: 'inStock' },
	{ id: 'sarm_card_novo', name: 'Cardarine GW-501516 - NovoSarms', substance: 'Cardarine', brand: 'NovoSarms', price: 58, image: 'images/SARMS/sarm_card_50_novo.png', category: 'sarms', packaging: '30 ml (50 mg/ml)', stockStatus: 'inStock' },
        { id: 'sarm_lgd_rewix', name: 'Ligandrol LGD-4033 - Rewix Labs', substance: 'Ligandrol', brand: 'Rewix Labs', price: 55, image: 'images/SARMS/sarm_lgd_10_rewix.png', category: 'sarms', packaging: '100 tabs (10 mg/comp)', stockStatus: 'inStock' },
        { id: 'sarm_lgd_novo', name: 'Ligandrol LGD-4033 - NovoSarms', substance: 'Ligandrol', brand: 'NovoSarms', price: 60, image: 'images/SARMS/sarm_lgd_20_novo.png', category: 'sarms', packaging: '30 ml (20 mg/ml)', stockStatus: 'inStock' },
	{ id: 'sarm_nutr_rewix', name: 'Nutrobal MK-677 - Rewix Labs', substance: 'Ibutamoren', brand: 'Rewix Labs', price: 63, image: 'images/SARMS/sarm_nutr_25_rewix.png', category: 'sarms', packaging: '100 comp (25 mg/comp)', stockStatus: 'inStock' },
	{ id: 'sarm_nutr_novo', name: 'Nutrobal MK-677 - NovoSarms', substance: 'Ibutamoren', brand: 'NovoSarms', price: 67, image: 'images/SARMS/sarm_nutr_50_novo.png', category: 'sarms', packaging: '30ml (50 mg/ml)', stockStatus: 'inStock' },
        { id: 'sarm_osta_rewix', name: 'Ostarine MK-2866 - Rewix Labs', substance: 'Ostarine', brand: 'Rewix Labs', price: 61, image: 'images/SARMS/sarm_osta_10_rewix.png', category: 'sarms', packaging: '100 comp (10 mg/comp)', stockStatus: 'inStock' },
        { id: 'sarm_osta_novo', name: 'Ostarine MK-2866 - NovoSarms', substance: 'Ostarine', brand: 'NovoSarms', price: 62, image: 'images/SARMS/sarm_osta_50_novo.png', category: 'sarms', packaging: '30ml (50 mg/ml)', stockStatus: 'inStock' },
	{ id: 'sarm_S23_rewix', name: 'S-23 - Rewix Labs', substance: 'S-23', brand: 'Rewix Labs', price: 63, image: 'images/SARMS/sarm_S23_10_rewix.png', category: 'sarms', packaging: '100 comp (10 mg/comp)', stockStatus: 'inStock' },
	{ id: 'sarm_sten_rewix', name: 'Stenabolic SR9009 - Rewix Labs', substance: 'SR9009', brand: 'Rewix Labs', price: 61, image: 'images/SARMS/sarm_sten_5_rewix.png', category: 'sarms', packaging: '100 comp (5 mg/comp)', stockStatus: 'inStock' },
	{ id: 'sarm_sten_rewix', name: 'Stenabolic SR9009 - NovoSarms', substance: 'SR9009', brand: 'NovoSarms', price: 72, image: 'images/SARMS/sarm_sten_50_novo.png', category: 'sarms', packaging: '30 ml (50 mg/ml)', stockStatus: 'inStock' },
        { id: 'sarm_rad_rewix', name: 'RAD-140 - Rewix Labs', substance: 'RAD-140', brand: 'Rewix Labs', price: 50, image: 'images/SARMS/sarm_rad_5_rewix.png', category: 'sarms', packaging: '100 comp (5 mg/comp)', stockStatus: 'inStock' },
        { id: 'sarm_rad_novo', name: 'RAD-140 - NovoSarms', substance: 'RAD-140', brand: 'NovoSarms', price: 60, image: 'images/SARMS/sarm_rad_20_novo.png', category: 'sarms', packaging: '30 ml (20 mg/ml)', stockStatus: 'inStock' },
	{ id: 'sarm_yk11_rewix', name: 'YK11 - Rewix Labs', substance: 'YK11', brand: 'Rewix Labs', price: 72, image: 'images/SARMS/sarm_yk11_4_rewix.png', category: 'sarms', packaging: '100 comp (4 mg/comp)', stockStatus: 'inStock' },
	
];
// ===== FIM DOS DADOS DOS PRODUTOS =====


// --- Funções do Carrinho ---
// ... (Funções getCart, saveCart, addToCart, updateCartCount - sem alterações) ...
function getCart() {
    try {
        const cartData = localStorage.getItem('shoppingCart');
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error("Erro ao ler o carrinho do localStorage:", error);
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        updateCartCount();
    } catch (error) {
        console.error("Erro ao salvar o carrinho no localStorage:", error);
        alert("Erro ao atualizar o carrinho. Por favor, tente novamente.");
    }
}

function addToCart(productId, productName, productPrice) {
    const cart = getCart();
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    productPrice = parseFloat(productPrice);
    if (isNaN(productPrice)) {
        console.error("Preço inválido ao adicionar ao carrinho:", productName, productPrice);
        alert("Erro: Não foi possível adicionar o produto devido a preço inválido.");
        return;
    }
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity = (Number(cart[existingItemIndex].quantity) || 0) + 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }
    saveCart(cart);
     alert(`${productName} adicionado ao carrinho!`);
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

// --- Lógica Principal ---
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    const whatsappNumber = '+351937049990';
    const shippingCost = 6;
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModalBtn = document.querySelector('.close-modal');
    const productGrid = document.getElementById('product-grid');
    const substanceFilter = document.getElementById('substance-filter');
    const brandFilter = document.getElementById('brand-filter');
    const currentCategory = document.body.dataset.category;

    // --- Funções de Página de Produto ---
    if (productGrid && currentCategory) {
        const categoryProducts = allProducts.filter(p => p.category === currentCategory);
        const getUniqueValues = (products, key) => [...new Set(products.map(item => item ? item[key] : null).filter(Boolean))].sort((a, b) => a.localeCompare(b));

        // *** NOVA FUNÇÃO AUXILIAR PARA CONTAR PRODUTOS ***
        const countProducts = (products, key, value) => {
            return products.reduce((count, product) => {
                if (product && product.hasOwnProperty(key) && product[key] === value) {
                    return count + 1;
                }
                return count;
            }, 0);
        };

        // *** FUNÇÃO populateDropdown MODIFICADA ***
        const populateDropdown = (selectElement, options, productsToCountFrom, keyToCount, defaultOptionValue = "all", defaultOptionText) => {
            if (!selectElement) return;
            selectElement.innerHTML = ''; // Limpa opções existentes

            // Opção padrão ("Todas...")
            const defaultOpt = document.createElement('option');
            defaultOpt.value = defaultOptionValue;
            const totalCountForDefault = productsToCountFrom.length; // Conta total para "Todas"
            defaultOpt.textContent = defaultOptionText || `Todas as ${keyToCount === 'substance' ? 'Substâncias' : 'Marcas'} (${totalCountForDefault})`;
            selectElement.appendChild(defaultOpt);

            // Opções individuais com contagem
            options.forEach(optionValue => {
                const count = countProducts(productsToCountFrom, keyToCount, optionValue);
                if (count > 0) { // Só adiciona se houver produtos
                    const opt = document.createElement('option');
                    opt.value = optionValue;
                    opt.textContent = `${optionValue} (${count})`; // Adiciona a contagem
                    selectElement.appendChild(opt);
                }
            });
        };

 // ** FUNÇÃO createProductCardHTML ATUALIZADA COM STATUS DE STOCK **
        const createProductCardHTML = (product) => {
            const formattedPrice = typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A';
            const imagePath = product.image || 'images/placeholder.png';
            const packagingText = product.packaging || 'Info Embalagem Indisponível';

            // Verifica o status do stock
            const isOutOfStock = product.stockStatus === 'outOfStock';
            const cardClass = isOutOfStock ? 'product-card out-of-stock' : 'product-card'; // Adiciona classe se esgotado
            const buttonText = isOutOfStock ? 'Esgotado' : '<i class="fas fa-cart-plus"></i> Adicionar';
            const buttonDisabled = isOutOfStock ? 'disabled' : ''; // Adiciona atributo disabled se esgotado
            const stockOverlay = isOutOfStock ? '<div class="stock-overlay">Esgotado!</div>' : ''; // HTML da sobreposição

            return `
                <div class="${cardClass}" data-product-id="${product.id}">
                    <div class="product-image-container">
                        <img src="${imagePath}" alt="${product.name}" class="product-image-zoomable" onerror="this.onerror=null;this.src='images/placeholder.png';">
                        ${stockOverlay}
                    </div>
                    <h3>${product.name}</h3>

                    <div class="product-info-block">
                        <p class="product-material"><strong>Material:</strong> ${product.substance || 'N/A'} - ${product.brand || 'N/A'}</p>
                        <p class="product-packaging"><strong>Embalagem:</strong> ${packagingText}</p>
                    </div>
                    

                    <p class="price">${formattedPrice}€</p>
                    <button class="add-to-cart-btn" ${buttonDisabled}>
                        ${buttonText}
                    </button>
                </div>
            `;
        };

        const displayProducts = (productsToDisplay) => {
            productGrid.innerHTML = '';
            if (productsToDisplay.length === 0) {
                productGrid.innerHTML = '<p>Nenhum produto encontrado com estes filtros.</p>'; return;
            }
            productsToDisplay.forEach(product => {
                if(product && product.id) productGrid.insertAdjacentHTML('beforeend', createProductCardHTML(product));
                else console.warn("Produto inválido encontrado:", product);
            });
        };

        // *** FUNÇÃO updateFiltersAndDisplay MODIFICADA ***
        const updateFiltersAndDisplay = () => {
             if (!substanceFilter || !brandFilter) return;

            const selectedSubstance = substanceFilter.value;
            const selectedBrand = brandFilter.value;

            // 1. Filtrar por substância (se selecionada)
            let productsFilteredBySubstance = categoryProducts;
            if (selectedSubstance !== 'all') {
                productsFilteredBySubstance = categoryProducts.filter(p => p && p.substance === selectedSubstance);
            }

            // 2. Obter marcas disponíveis *depois* de filtrar por substância
            const availableBrands = getUniqueValues(productsFilteredBySubstance, 'brand');

             // 3. Manter a seleção de marca se ainda for válida, senão voltar para "Todas"
            const currentBrandSelection = availableBrands.includes(selectedBrand) ? selectedBrand : 'all';

            // 4. Repopular o dropdown de MARCAS com as opções e contagens corretas *baseadas nos produtos filtrados por substância*
            populateDropdown(brandFilter, availableBrands, productsFilteredBySubstance, 'brand', 'all', 'Todas as Marcas');
            brandFilter.value = currentBrandSelection; // Restaura a seleção

            // 5. Filtrar por marca (se selecionada) para exibir os produtos finais
            let finalFilteredProducts = productsFilteredBySubstance;
            if (currentBrandSelection !== 'all') {
                finalFilteredProducts = productsFilteredBySubstance.filter(p => p && p.brand === currentBrandSelection);
            }

            // 6. Exibir os produtos finais
            displayProducts(finalFilteredProducts);

            // 7. Repopular o dropdown de SUBSTÂNCIAS (isso não muda dinamicamente com base na marca, então usamos a lista completa da categoria para contagens)
            //    É importante fazer isso *depois* de definir selectedSubstance para manter a seleção atual.
            const allSubstances = getUniqueValues(categoryProducts, 'substance');
            populateDropdown(substanceFilter, allSubstances, categoryProducts, 'substance', 'all', 'Todas as Substâncias');
            substanceFilter.value = selectedSubstance; // Restaura a seleção

        };

        // Inicialização
        // Popula inicialmente com contagens baseadas em *todos* os produtos da categoria
        const initialSubstances = getUniqueValues(categoryProducts, 'substance');
        populateDropdown(substanceFilter, initialSubstances, categoryProducts, 'substance', 'all', 'Todas as Substâncias');

        const initialBrands = getUniqueValues(categoryProducts, 'brand');
        populateDropdown(brandFilter, initialBrands, categoryProducts, 'brand', 'all', 'Todas as Marcas');

        displayProducts(categoryProducts); // Exibe todos inicialmente

        // Listeners
        if(substanceFilter) substanceFilter.addEventListener('change', updateFiltersAndDisplay);
        if(brandFilter) brandFilter.addEventListener('change', updateFiltersAndDisplay); // Agora o listener da marca também chama a função completa

// Listener para cliques na grelha (ATUALIZADO)
        productGrid.addEventListener('click', (event) => {
            const addButton = event.target.closest('.add-to-cart-btn');
            const imageContainer = event.target.closest('.product-image-container');

            if (addButton) {
                // Verifica se o botão está desativado (ou seja, esgotado)
                if (addButton.disabled) {
                    return; // Não faz nada se estiver esgotado
                }
                const productCard = addButton.closest('.product-card');
                const productId = productCard?.dataset.productId;
                const product = allProducts.find(p => p.id === productId);
                if (product && typeof product.price === 'number') {
                    // Verifica novamente o status no objeto do produto por segurança
                    if (product.stockStatus !== 'outOfStock') {
                        addToCart(product.id, product.name, product.price);
                    } else {
                        console.warn("Tentativa de adicionar produto esgotado:", product.name);
                        alert("Este produto encontra-se esgotado."); // Mensagem opcional
                    }
                } else {
                    console.error("Erro ao adicionar: Produto não encontrado ou preço inválido.", productId, product);
                    alert("Erro ao adicionar produto.");
                }
                return; // Impede que o clique na imagem seja processado se clicou no botão
            }

            if (imageContainer) {
                 const imageToZoom = imageContainer.querySelector('.product-image-zoomable');
                 const productCard = imageContainer.closest('.product-card');
                 const isOutOfStock = productCard && productCard.classList.contains('out-of-stock');

                 // Permite zoom mesmo se esgotado, a menos que queira desativar
                 // if (isOutOfStock) return; // Descomente esta linha se não quiser zoom em esgotados

                if (imageToZoom && imageToZoom.src && !imageToZoom.src.endsWith('placeholder.png')) {
                    openImageModal(imageToZoom.src);
                }
                return;
            }
        });
    } // Fim if(productGrid && currentCategory)

    // --- Lógica do Modal de Imagem ---
    function openImageModal(src) {
        if (modal && modalImg && src) {
            modalImg.src = src;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
    function closeImageModal() {
        if (modal) {
            modal.style.display = 'none';
            modalImg.src = "";
            document.body.style.overflow = '';
        }
    }
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeImageModal);
    if (modal) modal.addEventListener('click', (event) => { if (event.target === modal) closeImageModal(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal && modal.style.display === 'flex') closeImageModal(); });

    // --- Lógica da Página de Checkout ---
    if (document.getElementById('checkout-page')) {
        const cartItemsList = document.getElementById('cart-items-list');
        const subtotalElement = document.getElementById('subtotal');
        const shippingElement = document.getElementById('shipping');
        const totalElement = document.getElementById('total');
        const buyNowButton = document.getElementById('buy-now-btn');
        const nameInput = document.getElementById('name');
        const addressInput = document.getElementById('address');

        const removeFromCartCheckout = (productIdToRemove) => {
            let cart = getCart();
            cart = cart.filter(item => item.id !== productIdToRemove);
            saveCart(cart);
            displayCartItemsCheckout();
        };

        const displayCartItemsCheckout = () => {
            const cart = getCart();
            cartItemsList.innerHTML = '';
            let subtotal = 0;
            if (cart.length === 0) {
                cartItemsList.innerHTML = '<li>O seu carrinho está vazio.</li>';
                if(subtotalElement) subtotalElement.textContent = '0.00€';
                if(shippingElement) shippingElement.textContent = shippingCost.toFixed(2) + '€';
                if(totalElement) totalElement.textContent = shippingCost.toFixed(2) + '€';
                if(buyNowButton) buyNowButton.disabled = true;
                return;
            }
            if(buyNowButton) buyNowButton.disabled = false;
            cart.forEach(item => {
                const listItem = document.createElement('li');
                const itemPrice = typeof item.price === 'number' ? item.price : 0;
                const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
                const itemTotal = itemPrice * itemQuantity;
                subtotal += itemTotal;
                listItem.innerHTML = `
                    <span class="cart-item-details">${item.name} x${itemQuantity}</span>
                    <span class="cart-item-price">${itemTotal.toFixed(2)}€</span>
                    <button class="remove-item-btn" data-product-id="${item.id}" title="Remover Item">×</button>
                `;
                cartItemsList.appendChild(listItem);
            });
            const total = subtotal + shippingCost;
            if(subtotalElement) subtotalElement.textContent = `${subtotal.toFixed(2)}€`;
            if(shippingElement) shippingElement.textContent = `${shippingCost.toFixed(2)}€`;
            if(totalElement) totalElement.textContent = `${total.toFixed(2)}€`;
        };

        displayCartItemsCheckout();
        if (cartItemsList) cartItemsList.addEventListener('click', (event) => {
            const removeButton = event.target.closest('.remove-item-btn');
            if (removeButton) {
                const productId = removeButton.dataset.productId;
                if (productId) removeFromCartCheckout(productId);
            }
        });
        if (buyNowButton) buyNowButton.addEventListener('click', () => {
            const name = nameInput.value.trim();
            const address = addressInput.value.trim();
            const cart = getCart();
            if (!name) { alert("Por favor, preencha o seu Nome."); nameInput.focus(); return; }
            if (!address) { alert("Por favor, preencha a sua Morada."); addressInput.focus(); return; }
            if (cart.length === 0) { alert("O seu carrinho está vazio."); return; }
            let productListText = "";
            let finalSubtotal = 0;
            cart.forEach(item => {
                const itemPrice = typeof item.price === 'number' ? item.price : 0;
                const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
                productListText += `* ${item.name} x${itemQuantity}\n`;
                finalSubtotal += itemPrice * itemQuantity;
            });
            const finalTotal = finalSubtotal + shippingCost;
            let message = `Encomenda:\n\nNome: ${name}\nMorada: ${address}\n\nProduto(s):\n${productListText}\nValor a Pagar: ${finalTotal.toFixed(2)}€\n(Inclui Portes de ${shippingCost.toFixed(2)}€)`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        });
    } // Fim if checkout-page

    // --- Lógica Comum ---
    if (cartIcon) cartIcon.addEventListener('click', () => { window.location.href = 'checkout.html'; });
    updateCartCount();

}); // Fim DOMContentLoaded
