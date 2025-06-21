// Mui
import { Box } from "@mui/material";
// Colors
import colors from "../../../styles/theme/colors";

export interface HeaderPageIconProps {
  icon: React.ReactNode;
}

const useController = (props: HeaderPageIconProps) => props;

const view = ({ icon }: ReturnType<typeof useController>) => (
  <Box
    gap="10px"
    display="flex"
    padding="20px"
    alignItems="center"
    borderRadius="100px"
    flexDirection="column"
    justifyContent="center"
    bgcolor={colors.grey.primary.lighten}
    sx={{
      border: `1px solid ${colors.common.black.border}`,
      boxShadow: `0px 4px 4px 0px  ${colors.common.black.boxShadow}`,
    }}
  >
    {icon}
  </Box>
);

/**
 * @name HeaderPageIcon
 * @description Header Page Icon.
 * @author Skander Bouraoui
 * @version 1.0.0
 */

const HeaderPageIcon = (props: HeaderPageIconProps) =>
  view(useController(props));

export default HeaderPageIcon;
