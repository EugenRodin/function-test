
import ageClassification from '../1-function';

describe('ageClassification', () => {
  test('returns null for age less than 0', () => {
    expect(ageClassification(-1)).toBe(null);
  })

  test('returns "Дитинство" for ages up to 24', () => {
    for(let i = 0; i <= 24; i++) {
      expect(ageClassification(i)).toBe('Дитинство');
    }
  })

  test('returns "Молодість" for ages from 25 to 44', () => {
    for(let i = 25; i <= 44; i++) {
      expect(ageClassification(i)).toBe('Молодість');
    }
  })

  test('returns "Зрілість" for ages from 45 to 65', () => {
    for(let i = 45; i <= 65; i++) {
      expect(ageClassification(i)).toBe('Зрілість');
    }
  })

  test('returns "Старість" for ages from 66 to 75', () => {
    for(let i = 66; i <= 75; i++) {
      expect(ageClassification(i)).toBe('Старість');
    }
  })

  test('returns "Довголіття" for ages from 76 to 90', () => {
    for(let i = 76; i <= 90; i++) {
      expect(ageClassification(i)).toBe('Довголіття');
    }
  })

  test('returns "Рекорд" for ages from 91 to 122', () => {
    for(let i = 91; i <= 122; i++) {
      expect(ageClassification(i)).toBe('Рекорд');
    }
  })

  test('returns null for ages greater than 122', () => {
    expect(ageClassification(123)).toBe(null);
  })
})