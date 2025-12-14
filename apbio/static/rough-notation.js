
console.log("rough-notation loaded")
// https://github.com/rough-stuff/rough-notation
import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';

const colors = {
  foreground : "#2b2a26",
  background : "#fcfcfc",
  yellow : "#FFD105",
  red : "#bb3f3f",
  green: "#295225",
}

const a1 = annotate(document.querySelector('.underline'), { type: 'underline', color: colors.foreground, padding: -12, multiline: true });
const a2 = annotate(document.querySelector('.box'), { type: 'box', color: colors.green, multiline: true, animationDuration: 550 });
const a3 = annotate(document.querySelector('.highlight'), { type: 'highlight', color: colors.yellow, multiline: true});

const ag = annotationGroup([a3, a1, a2]);
ag.show();
