import { fetchData } from '../../utils/api';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: 'mockData' }),
  })
) as jest.Mock;

describe('API Utilities', () => {
  it('fetches data from the API', async () => {
    const data = await fetchData('https://example.com');
    expect(data).toEqual({ data: 'mockData' });
  });

  it('throws an error if the API call fails', async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      })
    );
    await expect(fetchData('https://example.com')).rejects.toThrow('Error fetching data');
  });
});