/**
 * @file 树: 对象 PascalCase key 转 SnakeCase
 */
import toSnakeCase from '../11.to_snack_case';

describe('树: 对象 PascalCase key 转 SnakeCase', () => {
  it('input: {}', () => {
    expect(toSnakeCase({})).toEqual({});
  });

  it('input: { TaoBao: 1, TMall: 2 }', () => {
    expect(toSnakeCase({ TaoBao: 1, TMall: 2 })).toEqual({
      tao_bao: 1,
      t_mall: 2
    });
  });

  it('input: { DouYin: 1, XiGua: 2, HuoShan: 3, PiPiXia: { TouTiao: 1, DongCheDi: 2, QingYan: 3 } }', () => {
    expect(
      toSnakeCase({
        DouYin: 1,
        XiGua: 2,
        HuoShan: 3,
        PiPiXia: { TouTiao: 1, DongCheDi: 2, QingYan: 3 }
      })
    ).toEqual({
      dou_yin: 1,
      xi_gua: 2,
      huo_shan: 3,
      pi_pi_xia: { tou_tiao: 1, dong_che_di: 2, qing_yan: 3 }
    });
  });

  it('input: { TaoBao: { TMall: { AliPay: 0 } } }', () => {
    expect(toSnakeCase({ TaoBao: { TMall: { AliPay: 0 } } })).toEqual({
      tao_bao: { t_mall: { ali_pay: 0 } }
    });
  });
});
