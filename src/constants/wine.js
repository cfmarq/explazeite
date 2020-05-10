const texts = {
  title: 'products.wine.title',
  benefitsTitle: 'products.wine.benefits',
  benefitsParagraphs: [
    {text: 'products.wine.benefits.p1'},
    {text: 'products.wine.benefits.p2'},
    {text: 'products.wine.benefits.p3'},
    {text: 'products.wine.benefits.p4'},
  ],
  interestTitle: 'products.wine.interest',
  interestParagraphs: [
    {text: 'products.wine.interest.p1'},
    {text: 'products.wine.interest.p2'},
  ]
}

const items = [
  {
    id: 1,
    shortName: 'vi_cmfr-750',
    imgTN: '/images/produtos/vinho/imagens_thumbnails/p_vinho-1.png',
    imgPP: '/images/produtos/vinho/imagens_popup/p_vinho-1.png',
    label: 'products.wine.p1.label',
    btnLabel: 'products.wine.p1.button.label',
    popupTitle: 'products.wine.p1.popup.title',
    popupSubtitle: 'products.wine.p1.popup.subtitle',
    popupP1: 'products.wine.p1.popup.p1',
    popupP2: 'products.wine.p1.popup.p2',
    popupP3: 'products.wine.p1.popup.p3',
    price: '1,80',
    weight: '1200'
  },
  {
    id: 2,
    shortName: 'vi_cmfb_750',
    imgTN: '/images/produtos/vinho/imagens_thumbnails/p_vinho-2.png',
    imgPP: '/images/produtos/vinho/imagens_popup/p_vinho-2.png',
    label: 'products.wine.p2.label',
    btnLabel: 'products.wine.p2.button.label',
    popupTitle: 'products.wine.p2.popup.title',
    popupSubtitle: 'products.wine.p2.popup.subtitle',
    popupP1: 'products.wine.p2.popup.p1',
    popupP2: 'products.wine.p2.popup.p2',
    popupP3: 'products.wine.p2.popup.p3',
    price: '1,70',
    weight: '1200'
  },
  {
    id: 3,
    shortName: 'vi_cmb_750',
    imgTN: '/images/produtos/vinho/imagens_thumbnails/p_vinho-3.png',
    imgPP: '/images/produtos/vinho/imagens_popup/p_vinho-3.png',
    label: 'products.wine.p3.label',
    btnLabel: 'products.wine.p3.button.label',
    popupTitle: 'products.wine.p3.popup.title',
    popupSubtitle: 'products.wine.p3.popup.subtitle',
    popupP1: 'products.wine.p3.popup.p1',
    popupP2: 'products.wine.p3.popup.p2',
    popupP3: 'products.wine.p3.popup.p3',
    price: '1,50',
    weight: '1200'
  },
  {
    id: 4,
    shortName: 'vi_cmt_750',
    imgTN: '/images/produtos/vinho/imagens_thumbnails/p_vinho-4.png',
    imgPP: '/images/produtos/vinho/imagens_popup/p_vinho-4.png',
    label: 'products.wine.p4.label',
    btnLabel: 'products.wine.p4.button.label',
    popupTitle: 'products.wine.p4.popup.title',
    popupSubtitle: 'products.wine.p4.popup.subtitle',
    popupP1: 'products.wine.p4.popup.p1',
    popupP2: 'products.wine.p4.popup.p2',
    popupP3: 'products.wine.p4.popup.p3',
    price: '1,50',
    weight: '1200'
  },
  {
    id: 5,
    shortName: 'vi_tzfg_750',
    imgTN: '/images/produtos/vinho/imagens_thumbnails/p_vinho-5.png',
    imgPP: '/images/produtos/vinho/imagens_popup/p_vinho-5.png',
    label: 'products.wine.p5.label',
    btnLabel: 'products.wine.p5.button.label',
    popupTitle: 'products.wine.p5.popup.title',
    popupSubtitle: 'products.wine.p5.popup.subtitle',
    popupP1: 'products.wine.p5.popup.p1',
    popupP2: 'products.wine.p5.popup.p2',
    popupP3: 'products.wine.p5.popup.p3',
    price: '2,80',
    weight: '1400'
  },
  {
    id: 6,
    shortName: 'vi_tzb_750',
    imgTN: '/images/produtos/vinho/imagens_thumbnails/p_vinho-6.png',
    imgPP: '/images/produtos/vinho/imagens_popup/p_vinho-6.png',
    label: 'products.wine.p6.label',
    btnLabel: 'products.wine.p6.button.label',
    popupTitle: 'products.wine.p6.popup.title',
    popupSubtitle: 'products.wine.p6.popup.subtitle',
    popupP1: 'products.wine.p6.popup.p1',
    popupP2: 'products.wine.p6.popup.p2',
    popupP3: 'products.wine.p6.popup.p3',
    price: '2,30',
    weight: '1250'
  },
  {
    id: 7,
    shortName: 'vi_tzt_750',
    imgTN: '/images/produtos/vinho/imagens_thumbnails/p_vinho-7.png',
    imgPP: '/images/produtos/vinho/imagens_popup/p_vinho-7.png',
    label: 'products.wine.p7.label',
    btnLabel: 'products.wine.p7.button.label',
    popupTitle: 'products.wine.p7.popup.title',
    popupSubtitle: 'products.wine.p7.popup.subtitle',
    popupP1: 'products.wine.p7.popup.p1',
    popupP2: 'products.wine.p7.popup.p2',
    popupP3: 'products.wine.p7.popup.p3',
    price: '2,30',
    weight: '1250'
  },
  {
    id: 8,
    shortName: 'vi_cmb_5000',
    imgTN: '/images/produtos/vinho/imagens_thumbnails/p_vinho-8.png',
    imgPP: '/images/produtos/vinho/imagens_popup/p_vinho-8.png',
    label: 'products.wine.p8.label',
    btnLabel: 'products.wine.p8.button.label',
    popupTitle: 'products.wine.p8.popup.title',
    popupSubtitle: 'products.wine.p8.popup.subtitle',
    popupP1: 'products.wine.p8.popup.p1',
    popupP2: 'products.wine.p8.popup.p2',
    popupP3: 'products.wine.p8.popup.p3',
    price: '7,35',
    weight: '5000'
  },
  {
    id: 9,
    shortName: 'vi_cmb_10000',
    imgTN: '/images/produtos/vinho/imagens_thumbnails/p_vinho-9.png',
    imgPP: '/images/produtos/vinho/imagens_popup/p_vinho-9.png',
    label: 'products.wine.p9.label',
    btnLabel: 'products.wine.p9.button.label',
    popupTitle: 'products.wine.p9.popup.title',
    popupSubtitle: 'products.wine.p9.popup.subtitle',
    popupP1: 'products.wine.p9.popup.p1',
    popupP2: 'products.wine.p9.popup.p2',
    popupP3: 'products.wine.p9.popup.p3',
    price: '13,50',
    weight: '10000'
  },
  {
    id: 10,
    shortName: 'vi_cmt_5000',
    imgTN: '/images/produtos/vinho/imagens_thumbnails/p_vinho-10.png',
    imgPP: '/images/produtos/vinho/imagens_popup/p_vinho-10.png',
    label: 'products.wine.p10.label',
    btnLabel: 'products.wine.p10.button.label',
    popupTitle: 'products.wine.p10.popup.title',
    popupSubtitle: 'products.wine.p10.popup.subtitle',
    popupP1: 'products.wine.p10.popup.p1',
    popupP2: 'products.wine.p10.popup.p2',
    popupP3: 'products.wine.p10.popup.p3',
    price: '7,35',
    weight: '5000'
  },
  {
    id: 11,
    shortName: 'vi_cmt_10000',
    imgTN: '/images/produtos/vinho/imagens_thumbnails/p_vinho-11.png',
    imgPP: '/images/produtos/vinho/imagens_popup/p_vinho-11.png',
    label: 'products.wine.p11.label',
    btnLabel: 'products.wine.p11.button.label',
    popupTitle: 'products.wine.p11.popup.title',
    popupSubtitle: 'products.wine.p11.popup.subtitle',
    popupP1: 'products.wine.p11.popup.p1',
    popupP2: 'products.wine.p11.popup.p2',
    popupP3: 'products.wine.p11.popup.p3',
    price: '13,50',
    weight: '10000'
  },
  {
    id: 12,
    shortName: 'vi_cmt_20000',
    imgTN: '/images/produtos/vinho/imagens_thumbnails/p_vinho-12.png',
    imgPP: '/images/produtos/vinho/imagens_popup/p_vinho-12.png',
    label: 'products.wine.p12.label',
    btnLabel: 'products.wine.p12.button.label',
    popupTitle: 'products.wine.p12.popup.title',
    popupSubtitle: 'products.wine.p12.popup.subtitle',
    popupP1: 'products.wine.p12.popup.p1',
    popupP2: 'products.wine.p12.popup.p2',
    popupP3: 'products.wine.p12.popup.p3',
    price: '25,50',
    weight: '20000'
  }

];

export default {texts, items};
