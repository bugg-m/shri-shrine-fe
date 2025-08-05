import React, { useState, useEffect, useRef, useCallback } from 'react';

interface DynamicTagsProps {
  tags: string[];
  tagClassName?: string;
  moreTagClassName?: string;
}

const DynamicTags: React.FC<DynamicTagsProps> = ({
  tags = [],
  tagClassName = 'inline-block rounded-sm bg-gray-200 px-2 py-0.5 text-2xs text-gray-600',
  moreTagClassName = 'inline-block rounded-sm bg-gray-200 px-2 py-0.5 text-2xs text-gray-700',
}) => {
  const [visibleTags, setVisibleTags] = useState<string[]>([]);
  const [hiddenCount, setHiddenCount] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateTagWidth = useCallback(
    (tagName: string, className: string): number => {
      const tempTag = document.createElement('span');
      tempTag.textContent = tagName;
      tempTag.className = className;
      tempTag.style.cssText =
        'position: absolute; visibility: hidden; white-space: nowrap;';
      document.body.appendChild(tempTag);
      const width = tempTag.getBoundingClientRect().width;
      document.body.removeChild(tempTag);
      return width + 8; // Add padding
    },
    []
  );

  const arrangeTags = useCallback(() => {
    if (!containerRef.current || tags.length === 0) return;

    const containerWidth = containerRef.current.getBoundingClientRect().width;
    if (containerWidth === 0) return;

    // Sort by length (shorter first)
    const sortedTags = [...tags].sort((a, b) => a.length - b.length);

    let currentWidth = 0;
    const gap = 4; // gap-1
    const visibleTagsArray: string[] = [];

    // Calculate "+X more" width
    const moreTagText = `+${tags.length} more`;
    const moreTagWidth = calculateTagWidth(moreTagText, moreTagClassName);

    for (let i = 0; i < sortedTags.length; i++) {
      const tag = sortedTags[i];
      const tagWidth = calculateTagWidth(tag, tagClassName);

      const widthWithTag =
        currentWidth + (visibleTagsArray.length > 0 ? gap : 0) + tagWidth;
      const remainingTags = sortedTags.length - i - 1;

      // Check if we need space for "+X more"
      const needsMoreTag = remainingTags > 0;
      const totalRequiredWidth = needsMoreTag
        ? widthWithTag + gap + moreTagWidth
        : widthWithTag;

      if (totalRequiredWidth <= containerWidth) {
        visibleTagsArray.push(tag);
        currentWidth = widthWithTag;
      } else {
        break;
      }
    }

    setVisibleTags(visibleTagsArray);
    setHiddenCount(tags.length - visibleTagsArray.length);
  }, [tags, tagClassName, moreTagClassName, calculateTagWidth]);

  useEffect(() => {
    const timer = setTimeout(arrangeTags, 0);
    return () => clearTimeout(timer);
  }, [arrangeTags]);

  useEffect(() => {
    const handleResize = () => arrangeTags();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [arrangeTags]);

  return (
    <div ref={containerRef} className="flex gap-1">
      {visibleTags.map((tag, index) => (
        <span key={`${tag}-${index}`} className={tagClassName}>
          {tag}
        </span>
      ))}

      {hiddenCount > 0 && (
        <span className={moreTagClassName}>+{hiddenCount} more</span>
      )}
    </div>
  );
};

export default DynamicTags;
