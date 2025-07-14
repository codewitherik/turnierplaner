import { useEffect } from 'react';
import { pluginConfig } from '../config/plugins';

export default function PluginLoader() {
  useEffect(() => {
    // Meta Tags
    Object.entries(pluginConfig.metaTags || {}).forEach(([name, content]) => {
      const tag = document.createElement('meta');
      tag.name = name;
      tag.content = content;
      document.head.appendChild(tag);
    });

    // Script Tags
    (pluginConfig.scriptTags || []).forEach(script => {
      const tag = document.createElement('script');
      tag.src = script.src;
      if (script.async) tag.async = true;
      if (script.defer) tag.defer = true;
      document.head.appendChild(tag);
    });
  }, []);

  return null;
}
