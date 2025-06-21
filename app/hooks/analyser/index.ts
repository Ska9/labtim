// React
import { useState, useEffect } from "react";
// Next
import { useRouter } from "next/router";
// Utils
// import uploadFile from '@utils/files/uploadQuoteFile'
// import { formatDateByLanguage } from '@utils/dates/index.'
// import formatFileSize from '@utils/files/formatSizeFile'
// Snackbar
import { enqueueSnackbar } from "notistack";

const useAnalyser = () => {
  const router = useRouter();
  const { ref } = router.query;

  // Loadings
  const [loadingFetch, setLoadingFetch] = useState<boolean>(false);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const [progress, setProgress] = useState<number>(0);

  const [creatorId, setCreatorId] = useState<string>("");

  const [projectRef, setProjectRef] = useState<string>("");

  const [subcontractorId, setSubcontractorId] = useState<string>("");

  useEffect(() => {
    if (ref) {
      setProjectRef(ref as string);
    }
  }, [ref]);

  /**
   * Fetches the payment configuration for the subcontractor
   */
  // useEffect(() => {
  //     const getQuoteStepOne = async () => {
  //         if (!projectRef) return
  //         try {
  //             setLoadingFetch(true)
  //             const res = await getOfferProject(projectRef)
  //             const { project, offer } = res
  //             if (res) {
  //                 const { creatorId } = project
  //                 const { nda } = project
  //                 const { subcontractorId } = offer
  //                 setUnsignedNda(nda)
  //                 setCreatorId(creatorId)
  //                 setSubcontractorId(subcontractorId)
  //             }
  //             setLoadingFetch(false)
  //         } catch (error) {
  //             setLoadingFetch(false)
  //         }
  //     }

  //     if (user) {
  //         getQuoteStepOne()
  //     }
  // }, [user, projectRef])

  // handle upload file + progress
  const handleUploadSignedNda = async (file: File) => {
    if (!projectRef || !file || !subcontractorId) return;

    const id = crypto.randomUUID();
    const fileName = file.name;
    const fileType = file.type;
    // const fileSize = formatFileSize(file.size)
    // const createdAt = formatDateByLanguage(locale)

    const path = `project/${creatorId}/${projectRef}/nda/${subcontractorId}`;

    // setLoadingUpload(true)
    // setProgress(0)
    // setLoadingProgress(true)
    // cancelUploadRef.current = false

    try {
      const progressCallback = (percentage: number) => {
        setProgress(percentage);
      };

      // const result = await uploadFile(
      //     user,
      //     { file, path },
      //     progressCallback
      // )

      // const newSignedNda = {
      //     id: `nda-signed-${id}`,
      //     name: fileName,
      //     type: fileType,
      //     size: fileSize,
      //     url: result.file,
      //     status: 'waiting',
      //     createdAt,
      //     rejectReason: undefined,
      // }

      // setSignedNda(newSignedNda)

      // setNdaList((prev: any[]) => [
      //     newSignedNda,
      //     ...prev.map((item) => ({
      //         ...item,
      //         status: 'canceled',
      //     })),
      // ])
    } catch (error) {
      console.error("Error uploading file:", error);
      enqueueSnackbar("Erreur", {
        variant: "error",
      });
    } finally {
      // setLoadingUpload(false)
      // setLoadingProgress(false)
    }
  };

  const handleValidate = async () => {
    try {
      setLoadingSubmit(true);
      // await updateSignedNdaDocs(ndaList)
      setLoadingSubmit(false);
      enqueueSnackbar("Success", {
        variant: "success",
      });
    } catch (error) {
      setLoadingSubmit(false);
      enqueueSnackbar("Erreur", {
        variant: "error",
      });
    }
  };

  // const onDelete = async () => {
  //     try {
  //         setLoading(true)
  //         // !! To be uncommented later
  //         // await deletePaymentSubcontractorConfig()
  //         setLoading(false)
  //         enqueueSnackbar(t({ id: 'page.payments_page.success_delete' }), {
  //             variant: 'success',
  //         })
  //     } catch (error) {
  //         setLoading(false)
  //         enqueueSnackbar(t({ id: 'page.payments_page.error_delete' }), {
  //             variant: 'error',
  //         })
  //     }
  // }

  const handleUpload = () => {};

  return {
    actions: { handleUpload },
  };
};

export default useAnalyser;
