// Mui
import {
  Box,
  BoxProps,
  Divider,
  DividerProps,
  Typography,
  TypographyProps,
} from "@mui/material";

interface TextDividerProps {
  typographyProps?: TypographyProps;
  dividerPropsStart?: DividerProps;
  dividerPropsEnd?: DividerProps;
  boxProps?: BoxProps;
}
const useController = (props: TextDividerProps) => props;

const view = ({
  typographyProps,
  boxProps,

  dividerPropsStart,
  dividerPropsEnd,
}: ReturnType<typeof useController>) => (
  <Box {...boxProps}>
    {dividerPropsStart && <Divider {...dividerPropsStart} />}
    <Typography {...typographyProps} />
    {dividerPropsEnd && <Divider {...dividerPropsEnd} />}
  </Box>
);

/**
 * @name TextDivider
 * @description Text Divider
 * @author Skadner Bouraoui <skander.bouraoui@quoprod.com>
 * @version 1.0.0
 */

const TextDivider = (props: TextDividerProps) => view(useController(props));
export default TextDivider;
