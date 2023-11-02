import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import RenderHtml from 'react-native-render-html';
import {useAppSelector} from '../../../redux/hooks';
import {selectJobDetail} from '../../../redux/selectors';
import styles, {tagStyles} from './JobContent.style';

const JobContent = props => {
  const jobDetail = useAppSelector(selectJobDetail);

  // Clean unnecessary spaces, <br> tags, \r\n usages causes bad html view
  const prepareHtmlString: (
    htmlString?: string,
  ) => string | undefined = htmlString => {
    // console.log(`Raw HTML Content: ${htmlString}`);
    htmlString = `<body>${htmlString}</body>`;
    htmlString = htmlString
      ?.replaceAll(/>[ ]+/g, '>')
      .replaceAll(/[ ]+</g, '<')
      .replaceAll(/[ ][ ]+/g, ' ')
      .replaceAll(/(\r\n)+/g, '')
      .replaceAll(/<br>(<br>)+/g, '<br><br>')
      .replaceAll(/<br>(<br>)+<li>/g, '<br><li>')
      .replaceAll(/<\/li><br>(<br>)+/g, '</li><br>')
      .replaceAll(/(<br>)+<ul>/g, '<ul>')
      .replaceAll(/<\/ul>(<br>)+/g, '</ul>')
      .replaceAll('</li></ul><ul><li>', '</li><li>');
    // console.log(`Arranged HTML Content: ${htmlString}`);
    return htmlString;
  };

  const source = {
    html: `${prepareHtmlString(jobDetail?.contents)}`,
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <RenderHtml
          contentWidth={useWindowDimensions().width}
          source={source}
          tagsStyles={tagStyles}
        />
      </ScrollView>
    </View>
  );
};

export default JobContent;
