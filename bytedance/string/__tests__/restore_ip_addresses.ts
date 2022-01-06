/**
 * @file 字符串: 复原 IP 地址
 */
import restoreIpAddresses from '../restore_ip_addresses';

describe('字符串: 复原 IP 地址', () => {
  it('input: s = "25525511135"', () => {
    expect(restoreIpAddresses('25525511135')).toEqual([
      '255.255.11.135',
      '255.255.111.35',
    ]);
  });

  it('input: s = "0000"', () => {
    expect(restoreIpAddresses('0000')).toEqual(['0.0.0.0']);
  });

  it('input: s = "1111"', () => {
    expect(restoreIpAddresses('1111')).toEqual(['1.1.1.1']);
  });

  it('input: s = "010010"', () => {
    expect(restoreIpAddresses('010010')).toEqual(['0.10.0.10', '0.100.1.0']);
  });

  it('input: s = "101023"', () => {
    expect(restoreIpAddresses('101023')).toEqual([
      '1.0.10.23',
      '1.0.102.3',
      '10.1.0.23',
      '10.10.2.3',
      '101.0.2.3',
    ]);
  });
});
