// Mui
import { Box, Button, Typography } from "@mui/material";
// Components
import UploadFileIcon from "../../atoms/icons/UploadFileIcon";
import OutlinedUploadIcon from "../../atoms/icons/OutlinedUploadIcon";
import TextDivider from "../../molecules/TextDivider";
import HeaderPageIcon from "../../molecules/HeaderPageIcon";
// Libraries
import { useDropzone } from "react-dropzone";
// Styles
import colors from "../../../styles/theme/colors";

export interface UploaderProps {
  onClick: (file: File) => void;
}

const useController = ({ onClick }: UploaderProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {},
    multiple: true,
    noClick: true,
  });

  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/pdf";
    input.multiple = false;

    input.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        onClick(target.files[0]);
      }
    };

    input.click();
  };

  return { isDragActive, getRootProps, getInputProps, handleClick };
};

const view = ({
  isDragActive,
  getRootProps,
  getInputProps,
  handleClick,
}: ReturnType<typeof useController>) => (
  <Box gap="18px" display="flex" flexDirection="column">
    <Box
      gap="18px"
      display="flex"
      p="32px 150px"
      alignItems="center"
      borderRadius="12px"
      flexDirection="column"
      border={`2px dashed ${colors.grey[300]}`}
      bgcolor={isDragActive ? colors.purple[50] : colors.purple[300]}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <HeaderPageIcon icon={<OutlinedUploadIcon />} />
      <Typography variant="h6" fontWeight="600" color={colors.blue[300]} />
      <Typography
        variant="body2"
        fontWeight="600"
        color={colors.blue.opaque[400]}
      />
      <Typography variant="body2" fontWeight="600" color={colors.grey[300]} />
      <TextDivider
        boxProps={{
          gap: "8px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        dividerPropsStart={{
          sx: { width: "80px", height: "1px" },
        }}
        dividerPropsEnd={{
          sx: { width: "80px", height: "1px" },
        }}
        typographyProps={{
          sx: {
            variant: "body1",
            fontWeight: 500,
            lineHeight: "18.78px",
            color: colors.blue.shadow.light,
          },
        }}
      />
      <Button
        variant="text"
        onClick={handleClick}
        startIcon={<UploadFileIcon />}
        sx={{
          gap: "8px",
          p: "12px 20px",
          borderRadius: "8px",
          textTransform: "none",
          bgcolor: "transparent",
          border: "1px solid #CFCFCF",
        }}
      >
        <Typography variant="body2" fontWeight="600" lineHeight="16.44px" />
      </Button>
    </Box>
  </Box>
);

/**
 * @name Uploader
 * @description Uploader
 * @author Skander Bouraoui <skander.bouraoui@quoprod.com>
 * @version 1.0.0
 */

const Uploader = (props: UploaderProps) => view(useController(props));

export default Uploader;
