---
lang-ref: funding-guidance
title: DiSSCo UK Digitisation Guidance
description: Guidance for DiSSCo UK funding calls
background: /assets/images/funding-guidance/header.jpg
imageLicense: Photo by <a href="https://unsplash.com/@rthiemann?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Robert Thiemann</a> on <a href="https://unsplash.com/photos/nest-on-tree-g4EfH9OZgk4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
layout: post
---

# Introduction

For organisations preparing to apply for DiSSCo UK digitisation funding, this guidance aims to share resources and key information to help you plan and budget for your digitisation projects.

You can find background information about DiSSCo UK on the [website](/): the [About DiSSCo UK](/about) section outlines the objectives and structure of the programme, and [Resources](/resources) includes digitisation survey dashboard data; and links to other helpful institutions and guidance including the digitisation guides referenced below.

You are also strongly encouraged to continue engaging with the DiSSCo UK Community: consider reaching out to existing DiSSCo UK participants or attending related workshops and webinars to gain insights and establish collaborations. If you are not already on the DiSSCo UK mailing list and would like to receive notification of meetings or webinars relevant to this and future calls, please contact [dissco-uk@nhm.ac.uk](mailto:dissco-uk@nhm.ac.uk).

# Digitisation workflows and kit

The [DiSSCo Digitisation Guides](https://dissco.github.io) are a comprehensive resource offering best practices, workflows, and technical guidance for digitising natural science collections. Many pages have links to papers or standards, and these are collated and added to in the [Literature and Links](https://dissco.github.io/Literature/Literature.html) section.

Please note that while the guides include information about digitisation equipment, standards etc some of this can go out of date quite quickly. Examples of kit should be used as an illustration -- you will need to investigate which kit is best suited to your projects, and source current pricing e.g., by searching for purchase options.

## Getting started in your planning

The [Digitisation Best Practices](https://dissco.github.io/BestPractice.html) section is a good place to start.

While some aspects of the [Digitisation Quick Start Guide](https://dissco.github.io/DigQuickStart.html) may be superseded by the specific guidance for this call, the guide is helpful to ensure that you have all the relevant factors in mind.

[Digitisation Planning](https://dissco.github.io/DigitisationPlanning/DigPlanning.html) goes into greater detail, including introductory [Collections Inventory](https://dissco.github.io/DigitisationPlanning/CollectionsInventory.html) guidance on assessing your collections for digitisation (understanding how much you have and what condition it is in). The [Digitisation Monitoring](https://dissco.github.io/DigitisationPlanning/DigitisationMonitoring/DigitisationMonitoring.html) section discusses some factors which may impact your assumptions and delivery around digitisation rates (see also some indicative ranges of rates below).

In the [Digitisation](https://dissco.github.io/Digitisation/Digitisation.html) section, you can find overview resources including example lists of kit used for digitisation stations; guidance on pre-digitisation curation and preparation that may need to take place; and detailed guidance on areas such as geo-referencing.

The Data Management section includes guidance on various aspects of data management, including [software](https://dissco.github.io/DataManagement/Software/Software.html) that you may need for various stages of digitisation -- remember to include relevant software licenses in the costs that you bid for.

## Workflows and equipment

As the scope of this call is herbarium and entomological (insect) collections, you will need to reference the relevant [Workflows](https://dissco.github.io/Workflow.html) -- the guides include examples of herbarium digitisation workflows from four institutions including the Natural History Museum and the Royal Botanic Gardens Edinburgh; and two different types of workflow for pinned insects.

Your bids should specify what workflow(s) you expect to use and why, including any ways in which you expect to have to vary the workflows as described here. Similarly, please specify if you intend to use different kit and why.

Indicative ranges of digitisation rates per person per day are shown below. Rates can vary significantly depending on the circumstances of collections and sub-collections, including their storage, condition and the proximity of collections to digitisation stations. If you can do any testing, that is very helpful in estimating likely outputs for your projects, though we understand this may not be possible where kit and staff are not in place. You should not treat the rates below as a ceiling. When planning your projects and specifying the estimated digitisation outputs, you should consider time for recruitment; ordering kit; receiving training and getting up to speed. NHM use an assumption of 220 working days as the standard equivalent person year when considering likely digitisation outputs, considering weekends, public holidays and typical annual leave entitlement -- this can be reduced proportionately for e.g. part time or other working patterns. Please specify if you use an alternative assumptions for any reason.

More detailed information about how to work out what kit you may need is included in Annex A, Guidance for assessing digitisation equipment.

### Herbarium sheets

As a very broad indicator, we expect that rates for herbarium sheet digitisation may range between 250-450 sheets per person per day. This is not a ceiling -- rates can vary widely depending on collections and things like distance to the digitisation station(s).

### Pinned insects

For Pinned insect workflows, hubs may need to use both of those shown in these guides ([with](https://dissco.github.io/PinnedInsect/NHM%20single%20camera%20pinned%20insects.html) and [without label removal](https://dissco.github.io/PinnedInsect/ALICE.html)) depending on the collections proposed and factors such as the degree to which specimen wings obscure the relevant labels.

Currently, the cost of a multi-camera imaging set up to digitise insect specimens without label removal is of the order of £25,000. The NHM are in the process of developing a very much more affordable and portable set-up for this process, however this is just entering testing -- we will update the community if further details become available over the timeline of the funding call, but in the meantime, you should use the current costings for ALICE digitisation stations.

As a very broad indicator, we expect that:

- Rates for digitising pinned insects suitable for a multi-camera workflow (ALICE) without removing labels may range from 400-600 per person per day
- Rates for digitising pinned insects using a label removal workflow (e.g. Lepidoptera, whose wings typically cover labels) may range from 80-250 per person per day.

# Data and standards

DiSSCo UK uses the Minimum Information about a Digital Specimen ([MIDS](https://tdwg.github.io/mids/index.html)) standard to define core digitisation data requirements and monitor delivery, enabling digitisation at scale and pace. All specimens digitised must meet [MIDS Level 1](https://tdwg.github.io/mids/information-elements/index.html#MIDS1) (inclusive of [MIDS Level 0](https://tdwg.github.io/mids/information-elements/index.html#MIDS0)), capturing which institution a specimen is held at; a unique identifier for the specimen; an object type (e.g., pinned insect); a name (e.g. the taxonomic name); information on when the record was created and modified; and the relevant licence for use (see below). Projects may/should also include elements of [MIDS Level 2](https://tdwg.github.io/mids/information-elements/index.html#MIDS2) where the relevant information to populate these elements is present -- at the least, projects will generate media (2D images) including label data from which MIDS Level 2 data can later be extracted (e.g., when DiSSCo UK makes automated extraction tools available). The MIDS site includes information about mapping MIDS concepts to other standards including Darwin Core. Annex B provides some examples based on NHM data with these fields and other default fields NHM typically record in mass digitisation. Some fields are required for our compliance and accreditation purposes, or are critical to collections management -- these may not be published e.g., internal location information. Please include in your project plans any equivalent fields that you need to capture in addition to those required and published by DiSSCo UK.

In general, NHM workflows combine imaging and data capture, using barcodes both to add an identifier and to capture key data fields such as taxonomy, which are set up in advance in the collections management system. You should aim to minimise manual transcription in your projects as much as possible. If you already have access to automated transcription tools, please specify how you intend to use these for data capture. DiSSCo UK will provide such tools, but these may not be available for initial projects -- they can however be used to extract additional data from images at a later date. Geo-referencing is not required as standard in DiSSCo UK digitisation projects. If your project proposes to create additional data, including any geo-referencing, please specify what, and the costs and benefits you expect to be associated with this.

The expectation is that all data produced as part of DiSSCo UK projects will be openly published, with a process to deal with the small number of exceptions. You should make sure that all collections proposed for digitisation as part of DiSSCo UK can be demonstrated to be legally held by your institution(s) (i.e., ensure that any loan material or similar has been separated out).

Please align your overall approach and data management plans with the [FAIR data Principles](https://www.go-fair.org/fair-principles) (Findable, Accessible, Interoperable, Reusable), which are central to the DiSSCo UK mission.

The DiSSCo Digitisation Guides site includes an introduction to [intellectual property rights](https://dissco.github.io/DigitisationPlanning/licensing.html) and licensing. DiSSCo UK will use [Creative Commons](https://creativecommons.org) licenses as detailed in the guide -- CC0 for data and CC-BY 4.0 for images. These meet the requirements of our primary access platform (GBIF) and of making the data FAIR. Central support will be given to help organisations establish their data publishing, but further useful information on licensing, data standards and more can be found in the [GBIF Integrated Publishing Toolkit User Manual](https://ipt.gbif.org/manual/en/ipt/latest/applying-license) (the IPT will be one option for data publication in DiSSCo UK, but not the only one).

The DiSSCo UK approach to exceptions will follow the principles of the [Open Information and Exceptions Policy](https://doi.org/10.3897/rio.10.e120629) of the NHM. The DiSSCo UK technical infrastructure will establish access permissions and version control processes to manage the small number of exceptions -- further details will be discussed with the community in due course. DiSSCo UK's processing of collections data will be subject to data processing agreements that will need to be signed before funding is released -- these will be discussed with the community in due course.

A DiSSCo EU report about various relevant data standards and how they intersect is available [here](https://doi.org/10.5281/zenodo.15490505) and may be useful for reference.

# Staffing

The [Staffing](https://dissco.github.io/DigitisationPlanning/Staffing.html) section of the digitisation guides summarises some key skills that might be needed in digitisation work, and some guidance about approaches to testing those skills during recruitment.

## Team structure

Collections preparation and digitisation can involve both curation / collections management skills and digitisation and data skills. Unless your proposed digitisation projects are particularly large, it's likely that you may want to combine digitisation and collections assistant roles, so that the DiSSCo UK staff you employ can undertake both collections preparation (under the guidance of your curators / collections managers) and digitisation. In any case, digitisers need to be able to safely handle collections, and to develop enough expertise in their labelling, for example, to spot possible anomalies.

We recommend a minimum team 'unit' of three: two digitisers / collections assistants, and one senior digitiser, who is also likely to undertake digitisation but will additionally have a greater role in project set-up, management, and aspects such as problem-solving and data quality.

You may also need to cost for either new or existing staff time in more senior curatorial or leadership roles, or for more technical aspects of data management. Bear in mind that the balance of costs in your bid should directly contribute to digitisation outputs. If you are working in partnership with several institutions, consider how roles will be deployed and shared among you -- for example, moving teams from one project to another during the time period, or sharing more specialised data or leadership resources across multiple institutions.

### Training and support

You will be given training from the DiSSCo UK central programme team in core digitisation and data mobilisation tasks and help in setting up your kit and projects. You will also receive central support for data publication; problem-solving, and monitoring. Further details of the central training will be shared when available.

## Example Job Descriptions

You can find several example job descriptions (and some other international guidance about coordinating digitisation projects) here: <https://zenodo.org/communities/digicoordnet>

This will continue to be updated, and we'd also love to add relevant job descriptions from your organisations in due course, to facilitate alignment and best practice.

Depending on the scale of your project, you may wish to consider which roles are distinct; which could be combined (e.g., you may wish to have staff who are able to act as both collections assistants and digitisers to work across all stages of preparation and digitisation); and which could be shared if you are partnering with other institutions (e.g., not every institution may need separate quality assurance). Remember there will also be support from the centre for some aspects of management, reporting and data publishing.

---

[**Annex A – Guidance for Assessing Digitisation Equipment**](/assets/2025-06%20Annex%20A%20Guidance%20for%20Assessing%20Digitisation%20Equipment.pdf)

[**Annex B – Examples of Applying Data Standards**](/assets/2025-06%20Annex%20B%20DISSCo%20UK%20examples%20of%20applying%20data%20standards.pdf)
