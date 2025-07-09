import { describe, expect, test } from 'vitest';
import { getCroppedImageUrl } from './image-url';

describe('getCroppedImageUrl', () => {
  test('should return cropped image URL', () => {
    const imageUrl = 'https://example.com/media/image.jpg';
    const croppedUrl = getCroppedImageUrl(
      imageUrl,
      'https://example.com/media/image.webp',
      600,
      400
    );
    expect(croppedUrl).toBe('https://example.com/media/crop/600/400/image.jpg');
  });
  test('should return cropped image URL with different dimensions', () => {
    const imageUrl = 'https://example.com/media/image.jpg';
    const croppedUrl = getCroppedImageUrl(
      imageUrl,
      'https://example.com/media/image.webp',
      800,
      600
    );
    expect(croppedUrl).toBe('https://example.com/media/crop/800/600/image.jpg');
  });
  test('should return fallback image URL if image URL is empty', () => {
    const imageUrl = '';
    const croppedUrl = getCroppedImageUrl(
      imageUrl,
      'https://example.com/media/image.webp',
      600,
      400
    );
    expect(croppedUrl).toBe('https://example.com/media/image.webp');
  });
});
