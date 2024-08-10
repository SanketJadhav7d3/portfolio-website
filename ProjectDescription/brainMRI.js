

const brainMRIContent = `

# Brain MRI Segmentation

Trained three different architecture for the task of brain MRI Segmentation. 

# Architecture Used

- UNet
- DeepLabV3
- DeepLabV3+

# Dataset

<img src="./ProjectDescription/BrainMRI/data_grid.png" alt="Not found" width="700"><br>

The dataset used in this research includes brain MRI scans and manual segmentation masks of FLAIR abnormality regions from 110 lower-grade glioma patients, sourced from The Cancer Imaging Archive (TCIA) and associated with studies by Buda et al. (2019) and Mazurowski et al. (2017). The dataset features FLAIR imaging sequences and manual segmentation masks as ground truth annotations. Input image dimensions are (batch size, 3, 256, 256), with output masks of (batch size, 1, 256, 256).


# UNet

<img src="./ProjectDescription/BrainMRI/Unet/train_valid loss.png" alt="Not found" width="700"><br>
<img src="./ProjectDescription/BrainMRI/Unet/train_valid iou.png" alt="Not found" width="700"><br>

# DeepLabV3

<img src="./ProjectDescription/BrainMRI/DeepLabV3/train_valid loss.png" alt="Not found" width="700"><br>
<img src="./ProjectDescription/BrainMRI/DeepLabV3/train_valid iou.png" alt="Not found" width="700"><br>

## Prediction result

<img src="./ProjectDescription/BrainMRI/DeepLabV3/result.png" alt="Not found" width="700"><br>

# DeepLabV3+

<img src="./ProjectDescription/BrainMRI/DeepLabV3+/train_valid loss.png" alt="Not found" width="700"><br>
<img src="./ProjectDescription/BrainMRI/DeepLabV3+/train_valid iou.png" alt="Not found" width="700"><br>

## Prediction result

<img src="./ProjectDescription/BrainMRI/DeepLabV3+/result.png" alt="Not found" width="700"><br>
`;

export default brainMRIContent; 

