import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";

import SEO from "../src/components/utils/SEO";

const AboutPage: NextPage = () => {
  return (
    <div>
      <SEO title="About" description="Deployable app about page" />

      <Box
        sx={{
          width: 700,
          paddingTop: 4,
        }}
      >
        <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
          ornare arcu odio ut sem. In fermentum posuere urna nec tincidunt
          praesent semper feugiat. Massa tincidunt dui ut ornare lectus sit amet
          est placerat. Eget egestas purus viverra accumsan in nisl nisi
          scelerisque. In ante metus dictum at tempor commodo ullamcorper a.
          Mauris a diam maecenas sed enim ut sem viverra. Eu lobortis elementum
          nibh tellus molestie nunc non blandit massa. Egestas congue quisque
          egestas diam in arcu cursus euismod quis. Mauris ultrices eros in
          cursus turpis massa. Vel turpis nunc eget lorem dolor. Sem fringilla
          ut morbi tincidunt augue interdum velit.
        </Typography>

        <Typography gutterBottom>
          Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Vel
          pretium lectus quam id leo in vitae turpis massa. Scelerisque varius
          morbi enim nunc faucibus a pellentesque sit amet. Cursus turpis massa
          tincidunt dui ut ornare. Nulla pellentesque dignissim enim sit amet
          venenatis urna cursus eget. Sed velit dignissim sodales ut eu sem
          integer vitae justo. Ac felis donec et odio pellentesque diam
          volutpat. Etiam non quam lacus suspendisse faucibus. Neque convallis a
          cras semper auctor neque vitae. Justo eget magna fermentum iaculis eu.
          Lectus arcu bibendum at varius vel pharetra. Donec pretium vulputate
          sapien nec. Elit ut aliquam purus sit amet. Velit laoreet id donec
          ultrices tincidunt arcu non sodales. Parturient montes nascetur
          ridiculus mus. Sit amet massa vitae tortor condimentum lacinia quis
          vel eros. Ornare arcu odio ut sem nulla pharetra. Eget duis at tellus
          at urna condimentum. Consectetur adipiscing elit pellentesque habitant
          morbi tristique senectus et. Tincidunt praesent semper feugiat nibh.
        </Typography>

        <Typography gutterBottom>
          Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Tristique
          nulla aliquet enim tortor. Augue interdum velit euismod in
          pellentesque massa placerat. Ac ut consequat semper viverra nam libero
          justo. Nisi porta lorem mollis aliquam ut porttitor leo. Volutpat
          commodo sed egestas egestas fringilla. Purus viverra accumsan in nisl
          nisi. Mattis enim ut tellus elementum sagittis. Id diam vel quam
          elementum. Gravida cum sociis natoque penatibus et magnis dis. Eget
          est lorem ipsum dolor sit amet consectetur adipiscing elit. Id
          consectetur purus ut faucibus pulvinar elementum integer enim neque.
          Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Ac
          odio tempor orci dapibus ultrices in iaculis nunc sed. Metus vulputate
          eu scelerisque felis imperdiet proin. Consectetur purus ut faucibus
          pulvinar. Ut eu sem integer vitae justo eget magna fermentum iaculis.
        </Typography>
      </Box>
    </div>
  );
};

export default AboutPage;
